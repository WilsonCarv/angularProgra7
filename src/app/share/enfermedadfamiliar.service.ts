import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { retry, catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { UsuarioLogin } from "./models/usuarioLogin";
import { AuthenticationService } from "./authentication.service";
import { Router } from "@angular/router";
import { CustomHandlerErrorService } from "./custom-handler-error.service";
import { ErrorEntidad } from "./models/error-entidad";
import { EnfermedadfamiliarEntidad } from "./models/enfermedadfamiliar-entidad";
import { Enfermedadfamiliar } from "./models/enfermedadfamiliar";
import { EnfermedadEntidad } from "./models/enfermedad-entidad";

@Injectable({
  providedIn: "root"
})
export class EnfermedadfamiliarService {
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

  createEnfermedadFamiliar(
    enf: EnfermedadfamiliarEntidad
  ): Observable<Enfermedadfamiliar> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        "Authorization",
        "Bearer " + this.currentUser.access_token
      );
    }
    return this.http
      .post<Enfermedadfamiliar>(
        this.ServerUrl + "expediente/enfermedadFamiliar",
        enf,
        {
          headers
        }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  updateEnfermedadFamiliar(
    enf: EnfermedadfamiliarEntidad
  ): Observable<Enfermedadfamiliar> {
    let headers = new HttpHeaders();
    if (enf.id != null) {
      headers = headers.append(
        "Authorization",
        "Bearer " + this.currentUser.access_token
      );
    }
    return this.http
      .patch<Enfermedadfamiliar>(
        this.ServerUrl + "expediente/enfermedadFamiliar/" + enf.id,
        enf,
        {
          headers
        }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
