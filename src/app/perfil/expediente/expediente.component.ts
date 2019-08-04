import { Component, OnInit } from "@angular/core";
import Stepper from "bs-stepper";
import { Router } from "@angular/router";

import { NotificacionService } from "src/app/share/notificacion.service";
import { AlergiafrecEntidad } from "src/app/share/models/alergiafrec-entidad";
import { AlergiafrecService } from "src/app/share/alergiafrec.service";
import { Alergiafrec } from "src/app/share/models/alergiafrec";

import { ActividadesFisicas } from "../../share/models/actividades-fisicas";
import { ActividadesFisicasService } from "src/app/share/actividades-fisicas.service";
import { ActividadesFisicasEntidad } from "../../share/models/actividades-fisicas-entidad";
import { UserEntidad } from "src/app/share/models/user-entidad";

@Component({
  selector: "app-expediente",
  templateUrl: "./expediente.component.html",
  styleUrls: ["./expediente.component.css"]
})
export class ExpedienteComponent implements OnInit {
  name = "Angular";
  fuma = true;
  toma = true;
  alergias: Alergiafrec;
  selectedAlergias: Alergiafrec;
  actividadesFrecuentes: ActividadesFisicas;
  selectedActividades: ActividadesFisicas;
  error: any;
  private stepper: Stepper;
  constructor(
    private router: Router,
    private alergiaFrecuenteService: AlergiafrecService,
    private actividadFrecuenteService: ActividadesFisicasService,
    private notificacion: NotificacionService
  ) {
    this.getAlergias();
    this.getActividades();
  }

  getAlergias() {
    return this.alergiaFrecuenteService.getAlergiasF().subscribe(
      (respuesta: Alergiafrec) => (this.alergias = respuesta),
      error => {
        this.error = error;
        this.notificacion.msjError(this.error, "Alergias");
      }
    );
  }
  getActividades() {
    return this.actividadFrecuenteService.getActividades().subscribe(
      (respuesta: ActividadesFisicas) =>
        (this.actividadesFrecuentes = respuesta),
      error => {
        this.error = error;
        this.notificacion.msjError(this.error, "Actividades");
      }
    );
  }
  next() {
    this.stepper.next();
  }

  // clickedOption() {
  //   console.log(this.selectedAlergias);
  // }

  onSubmit(event) {
    console.log("Segundo Apellidog", event.target.SegundoApellido.value);
    console.log("Sexo", event.target.sexo.value);
    console.log("Fecha", event.target.fechaNacimiento.value);
    console.log("Alergias", event.target.plataformas_id);
    console.log("Actividades Selecionanadas", this.selectedActividades);
    console.log("Alergias Selecionanadas", this.selectedAlergias);
    return false;
  }

  changeStatusFuma(event) {
    if (!this.fuma) {
      this.fuma = true;
      console.log("Fuma", this.fuma);
    } else {
      this.fuma = false;
      console.log("Fuma", this.fuma);
    }
    console.log("CheckBox", event);
  }
  changeStatusAlcohol(event) {
    if (!this.toma) {
      this.toma = true;
      console.log("Fuma", this.fuma);
    } else {
      this.toma = false;
      console.log("Fuma", this.fuma);
    }
    console.log("CheckBox", event);
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true
    });
  }
}
