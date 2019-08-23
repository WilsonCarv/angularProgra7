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
import { Medicamentos } from "./models/medicamentos";
import { MedicamentosEntidad } from "./models/medicamentos-entidad";

@Injectable({
  providedIn: "root"
})
export class MedicamentosService {
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
  createMedicamento(med: MedicamentosEntidad): Observable<Medicamentos> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        "Authorization",
        "Bearer " + this.currentUser.access_token
      );
    }
    return this.http
      .post<Medicamentos>(this.ServerUrl + "expediente/medicamento", med, {
        headers
      })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  updateMedicamento(med: MedicamentosEntidad): Observable<Medicamentos> {
    let headers = new HttpHeaders();
    if (med.id != null) {
      headers = headers.append(
        "Authorization",
        "Bearer " + this.currentUser.access_token
      );
    }
    return this.http
      .patch<Medicamentos>(
        this.ServerUrl + "expediente/medicamento/" + med.id,
        med,
        {
          headers
        }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
