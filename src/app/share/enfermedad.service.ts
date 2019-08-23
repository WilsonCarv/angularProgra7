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
import { EnfermedadEntidad } from "./models/enfermedad-entidad";
import { Enfermedad } from "./models/enfermedad";

@Injectable({
  providedIn: "root"
})
export class EnfermedadService {
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
  createEnfermedad(enf: EnfermedadEntidad): Observable<Enfermedad> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        "Authorization",
        "Bearer " + this.currentUser.access_token
      );
    }
    return this.http
      .post<Enfermedad>(this.ServerUrl + "expediente/enfermedad", enf, {
        headers
      })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  updateEnfermedad(enf: EnfermedadEntidad): Observable<Enfermedad> {
    let headers = new HttpHeaders();
    if (enf.id != null) {
      headers = headers.append(
        "Authorization",
        "Bearer " + this.currentUser.access_token
      );
    }
    return this.http
      .patch<Enfermedad>(
        this.ServerUrl + "expediente/enfermedad/" + enf.id,
        enf,
        {
          headers
        }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
