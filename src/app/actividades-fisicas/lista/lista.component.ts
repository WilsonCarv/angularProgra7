import { Component, OnInit } from "@angular/core";
import { ActividadesFisicas } from "../../share/models/actividades-fisicas";
import { ActividadesFisicasEntidad } from "../../share/models/actividades-fisicas-entidad";
import { UserEntidad } from "src/app/share/models/user-entidad";
import { ActividadesFisicasService } from "src/app/share/actividades-fisicas.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NotificacionService } from "src/app/share/notificacion.service";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  datos: ActividadesFisicas;
  usuariosDoctores: UserEntidad[];
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actividad: ActividadesFisicasService,
    private notificacion: NotificacionService
  ) {}

  ngOnInit() {
    this.actividad
      .getActividades()
      .subscribe(
        (respuesta: ActividadesFisicas) => (this.datos = respuesta),
        error => (this.error = error)
      );
    console.log("datos", this.datos);
  }
}
