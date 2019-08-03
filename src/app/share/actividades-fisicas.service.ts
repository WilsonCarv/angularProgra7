import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { retry, catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ActividadesFisicas } from "./models/actividades-fisicas";
import { ActividadesFisicasEntidad } from "./models/actividades-fisicas-entidad";
import { UsuarioLogin } from "./models/usuarioLogin";
import { AuthenticationService } from "./authentication.service";
import { Router } from "@angular/router";
import { CustomHandlerErrorService } from "./custom-handler-error.service";
import { ErrorEntidad } from "./models/error-entidad";

@Injectable({
  providedIn: "root"
})
export class ActividadesFisicasService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
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
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  getActividades(): Observable<ActividadesFisicas> {
    return this.http
      .get<ActividadesFisicas>(this.ServerUrl + "expediente/actividadFrecuente")
      .pipe(catchError(this.handleError));
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
}
