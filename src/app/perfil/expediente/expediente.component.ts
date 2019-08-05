import { Component, OnInit, ViewChild } from "@angular/core";
import Stepper from "bs-stepper";
import { Router } from "@angular/router";
import { Expediente } from 'src/app/share/models/expediente';
import { ExpedienteService } from 'src/app/share/expediente.service';
import { ExpedienteEntidad } from 'src/app/share/models/expediente-entidad';
import { NotificacionService } from "src/app/share/notificacion.service";
import { AlergiafrecEntidad } from "src/app/share/models/alergiafrec-entidad";
import { AlergiafrecService } from "src/app/share/alergiafrec.service";
import { Alergiafrec } from "src/app/share/models/alergiafrec";
import { ActividadesFisicas } from "../../share/models/actividades-fisicas";
import { ActividadesFisicasService } from "src/app/share/actividades-fisicas.service";
import { ActividadesFisicasEntidad } from "../../share/models/actividades-fisicas-entidad";
import { UserEntidad } from "src/app/share/models/user-entidad";
import { NgForm } from "@angular/forms";
export interface ErrorEntidad {
  errors: { field: string; message: string }[];
}

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
  actividades: Array<{
    nombre: string;
    tiempo_al_dia: string;
    veces_por_semana: number;
  }>;
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
    this.actividades = [];
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
  addArray(event, otrasForm: NgForm) {
    console.log("Nombre", event.target.nombreActividad.value);
    console.log("Veces", event.target.veces_por_semana.value);
    console.log("Tiempo", event.target.tiempo_al_dia.value);
    const arr = {
      nombre: event.target.nombreActividad.value,
      tiempo_al_dia: event.target.tiempo_al_dia.value,
      veces_por_semana: event.target.veces_por_semana.value
    };
    this.actividades.push(arr);
    //Codigo para Limpiar el Form
    (<HTMLFormElement>document.getElementById("otrasActividades")).reset();
  }

  eliminarActividad(doc) {
    console.log("Doc", doc);
    const index: number = this.actividades.indexOf(doc);
    if (index !== -1) {
      this.actividades.splice(index, 1);
    }
  }

  onSubmit(obj: ExpedienteEntidad) {
   /* console.log("Segundo Apellido", event.target.SegundoApellido.value);
    console.log("Sexo", event.target.sexo.value);
    console.log("Fecha", event.target.fechaNacimiento.value);
    console.log("Alergias", event.target.plataformas_id);
    console.log("Actividades Selecionanadas", this.selectedActividades);
    console.log("Alergias Selecionanadas", this.selectedAlergias);
    return false;*/

  }

  changeStatusFuma(event) {
    if (!this.fuma) {
      this.fuma = true;
      console.log("Fuma", this.fuma);
    } else {
      this.fuma = false;
      console.log("Fuma", this.fuma);
    }
    console.log("CheckBox", event.target.customSwitch1);
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