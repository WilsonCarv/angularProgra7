import { Component, OnInit } from '@angular/core';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UserEntidad;
  datos: UsuarioLogin;
  error: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) {
    if (auntenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {}
  onSubmit(obj: UserEntidad) {

      this.auntenticationService.loginUser(obj).subscribe(
        (respuesta: UsuarioLogin) => (this.datos = respuesta),
         error => {
         this.error = error;
         this.notificacion.msjValidacion( this.error );
         },
       () => this.router.navigate(['/'], )
      );
    }

}

