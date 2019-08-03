import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { RolEntidad } from 'src/app/share/models/rol-entidad';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { ErrorEntidad } from 'src/app/share/models/error-entidad';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { UsuarioLogin } from "src/app/share/models/usuarioLogin";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  usuario: UserEntidad;
  datos: UserEntidad;
  roles: RolEntidad;
  error: ErrorEntidad;
  currentUser: UsuarioLogin;
  selectedFile = null;
  constructor(
    private router: Router,
    private autentification: AuthenticationService,
    private notificacion: NotificacionService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
<<<<<<< HEAD
    console.log("Current User", this.currentUser.user);
    console.log("User", this, this.currentUser);
  }
  onsubmit(obj: UserEntidad) {
    this.autentification
      .updateUser(this.currentUser.user.id, obj, this.currentUser.access_token)
      .subscribe(
        (respuesta: UserEntidad) => this.datos,
        // error
        error => {
          console.log("Error Update", error);
          this.error = error;
          this.notificacion.msjValidacion(this.error);
        },
        () => {
          this.autentification.logout();
          this.router.navigate(["/usuario/login"]);
        }
      );
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
=======
    console.log('Current User', this.currentUser.user);
>>>>>>> c94e98440d31235a0875a2baeef0864e02e2c6fe
  }
}
