import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Alergiafrec } from './models/alergiafrec';
import { AlergiafrecEntidad } from './models/alergiafrec-entidad';
import { UsuarioLogin } from './models/usuarioLogin';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { CustomHandlerErrorService } from './custom-handler-error.service';


@Injectable({
  providedIn: 'root'
})
export class AlergiafrecService {
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
    private handler: CustomHandlerErrorService) {
      this.authenticationService.currentUser.subscribe(
        x => (this.currentUser = x)
      );
   }
   createalergiaFrec(alg: AlergiafrecEntidad): Observable<Alergiafrec> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .post<Alergiafrec>(this.ServerUrl + 'expediente/alergiaFrecuente', alg, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
}

