import { Component, OnInit } from "@angular/core";
import { EnfermedadesFrecuentes } from "../../share/models/enfermedades-frecuentes";
import { EnfermedadesFrecuentesEntidad } from "../../share/models/enfermedades-frecuentes-entidad";
import { UserEntidad } from "src/app/share/models/user-entidad";
import { EnfermedadFrecuenteService } from "src/app/share/enfermedad-frecuente.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NotificacionService } from "src/app/share/notificacion.service";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  datos: EnfermedadesFrecuentes;
  usuariosDoctores: UserEntidad[];
  error: {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enfermedad: EnfermedadFrecuenteService,
    private notificacion: NotificacionService
  ) {}

  ngOnInit() {
    this.enfermedad
      .getEnfermedades()
      .subscribe(
        (respuesta: EnfermedadesFrecuentes) => (this.datos = respuesta),
        error => (this.error = error)
      );
    console.log("datos", this.datos);
  }
}
