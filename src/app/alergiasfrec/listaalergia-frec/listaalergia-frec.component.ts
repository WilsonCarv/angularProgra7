import { Component, OnInit } from "@angular/core";
import { Alergiafrec } from "../../share/models/alergiafrec";
import { AlergiafrecEntidad } from "src/app/share/models/alergiafrec-entidad";
import { AlergiafrecService } from "src/app/share/alergiafrec.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NotificacionService } from "src/app/share/notificacion.service";
import { UsuarioLogin } from "src/app/share/models/usuarioLogin";
import { AuthenticationService } from "src/app/share/authentication.service";

@Component({
  selector: "app-listaalergia-frec",
  templateUrl: "./listaalergia-frec.component.html",
  styleUrls: ["./listaalergia-frec.component.css"]
})
export class ListaalergiaFrecComponent implements OnInit {
  datos: Alergiafrec;
  alergias: AlergiafrecEntidad[];
  error: {};
  currentUser: UsuarioLogin;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alergiaServ: AlergiafrecService,
    private notificacion: NotificacionService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    let notifC = false;
    let notifM = false;

    // Mensajes
    this.route.queryParams.subscribe(params => {
      notifC = params.create || false;
      notifM = params.update || false;
    });
    if (notifC) {
      this.notificacion.msjSuccess("Alergia registrada!", "Registar alergia");
    }
    if (notifM) {
      this.notificacion.msjSuccess("Alergia desactivada", "Actualizar alergia");
    }
    this.getAlergias();
  }

  getAlergias() {
    this.alergiaServ
      .getAlergiasF()
      .subscribe(
        (respuesta: Alergiafrec) => (this.datos = respuesta),
        error => (this.error = error)
      );
    console.log("datos", this.datos);
  }

  linkEditar(obj: AlergiafrecEntidad) {
    obj.Active = false;
    this.alergiaServ
      .updateAlergiaF(obj, this.currentUser.access_token, obj.id)
      .subscribe(
        (respuesta: AlergiafrecEntidad) => this.datos,
        // error
        error => {
          console.log("Error Update", error);
          this.error = error;
          this.notificacion.msjValidacion(this.error);
        },
        () => {
          this.getAlergias();
        }
      );
  }
}
