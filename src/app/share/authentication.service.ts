import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserEntidad } from './models/user-entidad';
import { RolEntidad } from './models/rol-entidad';
import { UsuarioLogin } from './models/usuario-login';
import { ErrorEntidad } from './models/error-entidad';
import { CustomHandlerErrorService } from './custom-handler-error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  ServerUrl = environment.apiURL;

  errorData: ErrorEntidad;
  user: null;
  private currentUserSubject: BehaviorSubject<UsuarioLogin>;
  public currentUser: Observable<UsuarioLogin>;

  constructor(
    private http: HttpClient,
    private handler: CustomHandlerErrorService
  ) {
    this.currentUserSubject = new BehaviorSubject<UsuarioLogin>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): UsuarioLogin {
    return this.currentUserSubject.value;
  }
  getRoles(): Observable<RolEntidad> {
    return this.http.get<RolEntidad>(this.ServerUrl + 'expediente/role').pipe(catchError(this.handler.handleError.bind(this )));

 }
 createUser(user: UserEntidad): Observable<UserEntidad> {
  return this.http.post<RolEntidad>(this.ServerUrl + 'expediente/register', 'user', this.httpOptions)
  .pipe(catchError(this.handler.handleError.bind(this )));
 }
  loginUser(user: UserEntidad): Observable<UsuarioLogin> {
    return this.http
      .post<UsuarioLogin>(
        this.ServerUrl + 'expediente/login',
        user,
        this.httpOptions
      )
      .pipe(
        map(user => {
          // almacene los detalles del usuario y el token jwt en el almacenamiento local para mantener al usuario conectado entre las actualizaciones de la página
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  logout() {
    // eliminar usuario del almacenamiento local para cerrar la sesión del usuario
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
