import { Injectable } from '@angular/core';
import { ErrorEntidad } from './models/error-entidad';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHandlerErrorService {
  constructor() {}
  public handleError(error: ErrorEntidad | HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
      // Ocurrió un error del lado del cliente o de la red.
      console.error('Error: ', error.message);
    }
    return throwError(error);
  }
}
