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
import { CirugiaEntidad } from "./models/cirugia-entidad";
import { Cirugia } from "./models/cirugia";
@Injectable({
  providedIn: "root"
})
export class CirugiasService {
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

  createCirugia(cir: CirugiaEntidad): Observable<Cirugia> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        "Authorization",
        "Bearer " + this.currentUser.access_token
      );
    }
    return this.http
      .post<Cirugia>(this.ServerUrl + "expediente/cirugia", cir, {
        headers
      })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  updateCirugia(cir: CirugiaEntidad): Observable<Cirugia> {
    let headers = new HttpHeaders();
    if (cir.id != null) {
      headers = headers.append(
        "Authorization",
        "Bearer " + this.currentUser.access_token
      );
    }
    return this.http
      .patch<Cirugia>(this.ServerUrl + "expediente/cirugia/" + cir.id, cir, {
        headers
      })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
