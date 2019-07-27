import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { RolEntidad } from 'src/app/share/models/rol-entidad';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { ErrorEntidad } from 'src/app/share/models/error-entidad';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, DoCheck {
  usuario: UserEntidad;
  datos: UserEntidad;
  roles: RolEntidad;
  error: ErrorEntidad;
  constructor(
    private router: Router,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) {
    this.getRoles();
  }

  ngOnInit() {}
  ngDoCheck() {}
  onSubmit(obj: UserEntidad) {
    this.auntenticationService.createUser(obj).subscribe(
      (respuesta: UserEntidad) => (this.datos = respuesta),
       error => {
       this.error = error;
       this.notificacion.msjValidacion( this.error );
       },
     () => this.router.navigate(['/usuario/login'], {queryParams : { resgistrado : true }})
    );
  }
  getRoles() {
  this.auntenticationService.getRoles().subscribe(
    // succces
    (respuesta: RolEntidad) => (this.roles = respuesta),
    error => (this.error = error)
  );
  }
}
