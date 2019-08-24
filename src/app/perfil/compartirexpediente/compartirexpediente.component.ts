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
import { element } from "protractor";

@Component({
  selector: "app-compartirexpediente",
  templateUrl: "./compartirexpediente.component.html",
  styleUrls: ["./compartirexpediente.component.css"]
})
export class CompartirexpedienteComponent implements OnInit {
  datos: Users;
  expedientes: Array<ExpedienteEntidad>;
  error: any;
  currentUser: UsuarioLogin;
  expUser: UserEntidad;
  currentExpediente: Expediente;
  selectedUsers: Array<number>;
  expediente: ExpedienteEntidad;
  datosExpediente: Expediente;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ExpedienteServ: ExpedienteService,
    private notificacion: NotificacionService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
    this.expedientes = [];
    this.selectedUsers = [];
    this.getExpedienteData();
  }

  ngOnInit() {
    this.authenticationService
      .getUsers()
      .subscribe(
        (respuesta: Users) => (
          (this.datos = respuesta), console.log("Users", this.datos.usuarios[0])
        ),
        error => (this.error = error)
      );
  }
  getExpedienteData() {
    let params = +this.route.snapshot.paramMap.get("id");
    console.log("Parametros", params);
    this.ExpedienteServ.getExpedienteById(params).subscribe(
      (respuesta: Expediente) => {
        this.currentExpediente = respuesta;
        this.expediente = this.currentExpediente.expediente[0];
        console.log("Expediente", this.expediente);

        this.currentExpediente.expediente[0]["users"].forEach(element => {
          this.selectedUsers.push(element.id);
          console.log("SelecteUsers", this.selectedUsers);
        });

        console.log(this.currentExpediente.expediente[0]);
      },
      error => {
        this.error = error;
        this.notificacion.msjError(this.error, "Alergias");
      }
    );
  }
  onSubmit(obj: Array<number>) {
    if (this.selectedUsers.length > 0) {
      this.expediente.users_id = this.selectedUsers;
      console.log("Expediente", this.expediente);
      console.log("Obje", this.selectedUsers);
      return this.ExpedienteServ.updateExpediente(this.expediente).subscribe(
        (respuesta: Expediente) => {
          this.datosExpediente = respuesta;
          this.router.navigate(["expasociado/list"]);
        },
        error => {
          this.error = error;
          this.notificacion.msjValidacion(this.error);
          console.log("Error", error);
        }
      );
    } else {
      this.notificacion.msjError(
        "Debe selecionar al menos un usuario para poder salvar!",
        "Compartir Expediente"
      );
      return false;
    }
  }
}
