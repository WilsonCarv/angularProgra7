import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Expediente } from './models/expediente';
import { ExpedienteEntidad } from './models/expediente-entidad';
import { environment } from 'src/environments/environment';
import { UsuarioLogin } from './models/usuarioLogin';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { CustomHandlerErrorService } from './custom-handler-error.service';

import {} from './models/actividades-fisicas';
import {} from './models/actividadfisica';


@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  currentUser: UsuarioLogin;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
   // HttpClient API post() method => Create vj
   createExpediente(exp: ExpedienteEntidad): Observable<Expediente> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .post<Expediente>(this.ServerUrl + 'expediente/expedienteUsuario', exp, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
