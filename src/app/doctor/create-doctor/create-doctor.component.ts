import { Component, OnInit, Input, DoCheck } from "@angular/core";
import { Router } from "@angular/router";
import { UserEntidad } from "src/app/share/models/user-entidad";
import { RolEntidad } from "src/app/share/models/rol-entidad";
import { AuthenticationService } from "src/app/share/authentication.service";
import { ErrorEntidad } from "src/app/share/models/error-entidad";
import { NotificacionService } from "src/app/share/notificacion.service";

@Component({
  selector: "app-create-doctor",
  templateUrl: "./create-doctor.component.html",
  styleUrls: ["./create-doctor.component.css"]
})
export class CreateDoctorComponent implements OnInit {
  usuario: UserEntidad;
  datos: UserEntidad;
  roles: RolEntidad;
  error: ErrorEntidad;
  constructor(
    private router: Router,
    private autentification: AuthenticationService,
    private notificacion: NotificacionService
  ) {}

  ngOnInit() {}
<<<<<<< HEAD

    // sucess
    onsubmit(obj: UserEntidad) {
    obj.role_id = 3;
    this.autentification.createUser(obj).subscribe((respuesta: UserEntidad) => (this.datos),
    // error
    error => {
      console.log('Error register', error);
      this.error = error;
      this.notificacion.msjValidacion(this.error);
    },
    () => {

      this.router.navigate(['/doctor/list']);
    }
=======
  getRoles() {
    this.autentification
      .getRoles()
      .subscribe(
        (respuesta: RolEntidad) => (this.roles = respuesta),
        error => (this.error = error)
      );
  }
  // sucess
  onsubmit(obj: UserEntidad) {
    obj.role_id = 3;
    this.autentification.createUser(obj).subscribe(
      (respuesta: UserEntidad) => this.datos,
      // error
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      }
      // complete
>>>>>>> 6a2a3931d745f85151787d078f22f633ce80f8fa
    );
  }
}
