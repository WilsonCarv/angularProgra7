import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { retry, catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ActividadfisicaEntidad } from "./models/actividadfisica-entidad";
import { Actividadfisica } from "./models/actividadfisica";
import { UsuarioLogin } from "./models/usuarioLogin";
import { AuthenticationService } from "./authentication.service";
import { Router } from "@angular/router";
import { CustomHandlerErrorService } from "./custom-handler-error.service";
import { ErrorEntidad } from "./models/error-entidad";

@Injectable({
  providedIn: "root"
})
export class ActividadesService {
  currentUser: UsuarioLogin;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  ServerUrl = environment.apiURL;
  errorData: {};
  user: null;
  constructor(
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService,
    private handler: CustomHandlerErrorService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  createActividad(act: ActividadfisicaEntidad): Observable<Actividadfisica> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        "Authorization",
        "Bearer " + this.currentUser.access_token
      );
    }
    return this.http
      .post<Actividadfisica>(
        this.ServerUrl + "expediente/actividadFisica",
        act,
        {
          headers
        }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  updateActividad(act: ActividadfisicaEntidad): Observable<Actividadfisica> {
    let headers = new HttpHeaders();
    if (act.id != null) {
      headers = headers.append(
        "Authorization",
        "Bearer " + this.currentUser.access_token
      );
    }
    return this.http
      .patch<ActividadfisicaEntidad>(
        this.ServerUrl + "expediente/actividadFisica/" + act.id,
        act,
        {
          headers
        }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
