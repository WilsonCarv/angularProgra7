import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { retry, catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { UserEntidad } from "./models/user-entidad";
import { RolEntidad } from "./models/rol-entidad";
import { UsuarioLogin } from "./models/usuarioLogin";
import { ErrorEntidad } from "./models/error-entidad";
import { CustomHandlerErrorService } from "./custom-handler-error.service";
import { Doctor } from "./models/doctor";
import { tokenName } from "@angular/compiler";
import { Users } from "./models/users";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  ServerUrl = environment.apiURL;
  errorData: ErrorEntidad;
  user: null;
  // esas dos variables Obtienen cual es el usuario que esta en el almacenamiento local
  private currentUserSubject: BehaviorSubject<UsuarioLogin>;
  public currentUser: Observable<UsuarioLogin>;

  constructor(
    private http: HttpClient,
    private handler: CustomHandlerErrorService
  ) {
    this.currentUserSubject = new BehaviorSubject<UsuarioLogin>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UsuarioLogin {
    return this.currentUserSubject.value;
  }
  // obtener lista roles
  getRoles(): Observable<RolEntidad> {
    return this.http
      .get<RolEntidad>(this.ServerUrl + "expediente/role")
      .pipe(catchError(this.handleError));
  }
  getDoctores(): Observable<Doctor> {
    return this.http
      .get<Doctor>(this.ServerUrl + "expediente/listaMedicos")
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  getUsers(): Observable<Users> {
    return this.http
      .get<Users>(this.ServerUrl + "expediente/listaUsuarios")
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  // Crear usuario
  createUser(user: UserEntidad): Observable<UserEntidad> {
    return this.http
      .post<UserEntidad>(
        this.ServerUrl + "expediente/register",
        user,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updateUser(
    user: UserEntidad,
    token: string,
    id: number
  ): Observable<UserEntidad> {
    let headers = new HttpHeaders();
    if (id != null) {
      headers = headers.append("Authorization", "Bearer " + token);
    }
    return this.http
      .patch<UserEntidad>(this.ServerUrl + "expediente/update/" + id, user, {
        headers
      })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  loginUser(user: UserEntidad): Observable<UsuarioLogin> {
    return this.http
      .post<UsuarioLogin>(
        this.ServerUrl + "expediente/login",
        user,
        this.httpOptions
      )
      .pipe(
        map(user => {
          // almacene los detalles del usuario y el token jwt en el almacenamiento local para mantener al usuario conectado entre las actualizaciones de la página
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  logout() {
    // eliminar usuario del almacenamiento local para cerrar la sesión del usuario
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Ocurrió un error del lado del cliente o de la red.

      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.

      // El backend devolvió un código de respuesta no exitoso.

      // El cuerpo de la respuesta puede contener información sobre lo que salió mal

      console.error(
        `Error código ${error.status}, ` + `,detalle: ${error.error}`
      );
    }

    /// devuelve un observable con un mensaje de error orientado al usuario

    return throwError(this.errorData);
  }

  getUserExpedientes(id: any): Observable<UsuarioLogin> {
    return this.http
      .get<UsuarioLogin>(this.ServerUrl + "expediente/buscar/" + id)
      .pipe(catchError(this.handleError));
  }

  // getUser(id: any): Observable<UsuarioLogin> {
  //   return this.http.get<UsuarioLogin>(this.ServerUrl + 'expediente/buscar/' + id).pipe(
  //     retry(1),
  //     catchError(this.handler.handleError.bind(this))
  //   );
  // }
}
