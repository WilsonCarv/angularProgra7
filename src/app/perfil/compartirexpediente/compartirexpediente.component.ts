import { Component, OnInit } from "@angular/core";
import { Users } from "../../share/models/users";
import { UsuarioLogin } from "../../share/models/usuarioLogin";
import { UserEntidad } from "src/app/share/models/user-entidad";
import { Expediente } from "../../share/models/expediente";
import { ExpedienteEntidad } from "src/app/share/models/expediente-entidad";
import { ExpedienteService } from "src/app/share/expediente.service";
import { AuthenticationService } from "src/app/share/authentication.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NotificacionService } from "src/app/share/notificacion.service";

@Component({
  selector: "app-compartirexpediente",
  templateUrl: "./compartirexpediente.component.html",
  styleUrls: ["./compartirexpediente.component.css"]
})
export class CompartirexpedienteComponent implements OnInit {
  datos: Users;
  expedientes: Array<ExpedienteEntidad>;
  error: {};
  currentUser: UsuarioLogin;
  expUser: UserEntidad;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expdienteSev: ExpedienteService,
    private notificacion: NotificacionService,
    private authenticationService: AuthenticationService
  ) {
    // this.authenticationService.currentUser.subscribe(
    //   x => (this.currentUser = x)
    // );
    // this.expedientes = [];
  }

  ngOnInit() {
    this.authenticationService
      .getUsers()
      .subscribe(
        (respuesta: Users) => (
          (this.datos = respuesta),
          console.log("Users", this.datos.usuarios[0]["role"]["nombre"])
        ),
        error => (this.error = error)
      );
  }
}
