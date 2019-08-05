import { Component, OnInit, ViewChild } from "@angular/core";
import Stepper from "bs-stepper";
import { Router } from "@angular/router";
import { Expediente } from "src/app/share/models/expediente";
import { ExpedienteService } from "src/app/share/expediente.service";
import { ExpedienteEntidad } from "src/app/share/models/expediente-entidad";
import { NotificacionService } from "src/app/share/notificacion.service";
import { AlergiafrecEntidad } from "src/app/share/models/alergiafrec-entidad";
import { AlergiafrecService } from "src/app/share/alergiafrec.service";
import { Alergiafrec } from "src/app/share/models/alergiafrec";
import { AlergiaEntidad } from "src/app/share/models/alergia-entidad";
import { Alergia } from "src/app/share/models/alergia";
import { ActividadesFisicas } from "../../share/models/actividades-fisicas";
import { Actividadfisica } from "../../share/models/actividadfisica";
import { ActividadfisicaEntidad } from "../../share/models/actividadfisica-entidad";
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
  expediente: ExpedienteEntidad;
  alergiasFrec: Alergiafrec;
  selectedAlergias: Array<number>; // Alergiafrec;
  actividadesFrecuentes: ActividadesFisicas;
<<<<<<< HEAD
  selectedActividades: Array<number>; //ActividadesFisicas;
  actividades: Array<ActividadfisicaEntidad>;
  alergias: Array<AlergiaEntidad>;
=======
  selectedActividades: Array<number>; // ActividadesFisicas;
  actividades: Array<{
    nombre: string;
    tiempo_al_dia: string;
    veces_por_semana: number;
  }>;
  alergias: Array<{
    nombre: string;
    categoria: string;
    reaccion: string;
    observaciones: string;
  }>;
>>>>>>> 914bf261ec7d76927a1a1cd58226cd01f9d4e77d
  error: any;
  datos: Expediente;
  private stepper: Stepper;
  constructor(
    private router: Router,
    private alergiaFrecuenteService: AlergiafrecService,
    private actividadFrecuenteService: ActividadesFisicasService,
    private notificacion: NotificacionService,
    private ExpedienteServ: ExpedienteService
  ) {
    this.getAlergias();
    this.getActividades();
    this.actividades = [];
    this.alergias = [];
  }

  getAlergias() {
    return this.alergiaFrecuenteService.getAlergiasF().subscribe(
      (respuesta: Alergiafrec) => (this.alergiasFrec = respuesta),
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
  addArrayActividades(obj: ActividadfisicaEntidad) {
    console.log("Objeto Actividades", obj);
    this.actividades.push(obj);
    console.log("Actividades", this.actividades);
    //Codigo para Limpiar el Form
    (<HTMLFormElement>document.getElementById("otrasActividadesForm")).reset();
  }

  addArrayAlergias(obj: AlergiaEntidad) {
    console.log("Alergias", obj);
    this.alergias.push(obj);
    console.log("Actividades", this.alergias);
    //Codigo para Limpiar el Form
    (<HTMLFormElement>document.getElementById("otrasAlerigasForm")).reset();
  }

  eliminarActividad(doc) {
    console.log("Doc", doc);
    const index: number = this.actividades.indexOf(doc);
    if (index !== -1) {
      this.actividades.splice(index, 1);
    }
  }
  eliminarAlergia(doc) {
    console.log("Doc", doc);
    const index: number = this.alergias.indexOf(doc);
    console.log("Index", index);
    if (index !== -1) {
      this.alergias.splice(index, 1);
    }
  }

  onSubmit(obj: ExpedienteEntidad) {
    if (this.fuma) {
      obj.fumado = 0;
    } else {
      obj.fumado = 1;
    }

    if (this.toma) {
      obj.alcohol = 0;
    } else {
      obj.alcohol = 1;
    }
    console.log("expediente", obj);
    return this.ExpedienteServ.createExpediente(obj).subscribe(
      (respuesta: Expediente) => {
        this.datos = respuesta;
        this.router.navigate(['/'], {
          queryParams: { create: 'true' }
        });
      },
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      }
    );
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
