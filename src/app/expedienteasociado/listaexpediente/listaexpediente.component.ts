import { Component, OnInit } from "@angular/core";
import { Expediente } from "../../share/models/expediente";
import { ExpedienteEntidad } from "../../share/models/expediente-entidad";
import { ExpedienteService } from "src/app/share/expediente.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NotificacionService } from "src/app/share/notificacion.service";
import { UsuarioLogin } from "src/app/share/models/usuarioLogin";
import { AuthenticationService } from "src/app/share/authentication.service";
import { UserEntidad } from "src/app/share/models/user-entidad";

@Component({
  selector: "app-listaexpediente",
  templateUrl: "./listaexpediente.component.html",
  styleUrls: ["./listaexpediente.component.css"]
})
export class ListaexpedienteComponent implements OnInit {
  datos: UsuarioLogin;
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
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
    this.expedientes = [];
  }

  ngOnInit() {
    this.authenticationService
      .getUserExpedientes(this.currentUser.user.id)
      .subscribe(
        (respuesta: UsuarioLogin) => (
          console.log("Respuesta", respuesta),
          (this.datos = respuesta),
          (this.expUser = this.datos.user[0]),
          (this.expedientes = this.expUser.expedientes),
          console.log("User", this.expedientes)
        ),
        error => (this.error = error)
      );
  }
}
