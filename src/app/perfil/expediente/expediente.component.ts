import { Component, OnInit, ViewChild } from "@angular/core";
import Stepper from "bs-stepper";
import { Router } from "@angular/router";
import { Expediente } from "src/app/share/models/expediente";
import { ExpedienteService } from "src/app/share/expediente.service";
import { ExpedienteEntidad } from "src/app/share/models/expediente-entidad";
import { NotificacionService } from "src/app/share/notificacion.service";
import { AlergiafrecEntidad } from "src/app/share/models/alergiafrec-entidad";
import { AlergiafrecService } from "src/app/share/alergiafrec.service";
import { EnfermedadFrecuenteService } from "src/app/share/enfermedad-frecuente.service";
import { Alergiafrec } from "src/app/share/models/alergiafrec";
import { Enfermedad } from "src/app/share/models/enfermedad";
import { EnfermedadEntidad } from "src/app/share/models/enfermedad-entidad";
import { Enfermedadfamiliar } from "src/app/share/models/enfermedadfamiliar";
import { EnfermedadfamiliarEntidad } from "src/app/share/models/enfermedadfamiliar-entidad";
import { EnfermedadesFrecuentes } from "src/app/share/models/enfermedades-frecuentes";
import { AlergiaEntidad } from "src/app/share/models/alergia-entidad";
import { Alergia } from "src/app/share/models/alergia";
import { ActividadesFisicas } from "../../share/models/actividades-fisicas";
import { Actividadfisica } from "../../share/models/actividadfisica";
import { ActividadfisicaEntidad } from "../../share/models/actividadfisica-entidad";
import { ActividadesFisicasService } from "src/app/share/actividades-fisicas.service";
import { ActividadesService } from "src/app/share/actividades.service";
import { ActividadesFisicasEntidad } from "../../share/models/actividades-fisicas-entidad";
import { UserEntidad } from "src/app/share/models/user-entidad";
import { NgForm } from "@angular/forms";
import { Cirugia } from "src/app/share/models/cirugia";
import { CirugiaEntidad } from "src/app/share/models/cirugia-entidad";
import { Medicamentos } from "src/app/share/models/medicamentos";
import { MedicamentosEntidad } from "src/app/share/models/medicamentos-entidad";

@Component({
  selector: "app-expediente",
  templateUrl: "./expediente.component.html",
  styleUrls: ["./expediente.component.css"]
})
export class ExpedienteComponent implements OnInit {
  name = "Angular";
  fuma = true;
  toma = true;
  idExpediente: number;
  expediente: ExpedienteEntidad;
  alergiasFrec: Alergiafrec;
  enfermedadFrec: EnfermedadesFrecuentes;
  selectedAlergias: Array<number>; // Alergiafrec;
  actividadesFrecuentes: ActividadesFisicas;
  selectedActividades: Array<number>; // ActividadesFisicas;
  selectedEnfermedades: Array<number>;
  actividades: Array<ActividadfisicaEntidad>;
  alergias: Array<AlergiaEntidad>;
  enfermedades: Array<EnfermedadEntidad>;
  cirugias: Array<CirugiaEntidad>;
  medicamentos: Array<MedicamentosEntidad>;
  enfermedadesFamiliares: Array<EnfermedadfamiliarEntidad>;
  // Enfermedades;
  error: any;
  datosExpediente: Expediente;
  datosActividades: Actividadfisica;
  private stepper: Stepper;
  constructor(
    private router: Router,
    private alergiaFrecuenteService: AlergiafrecService,
    private actividadFrecuenteService: ActividadesFisicasService,
    private enfermedadFrecService: EnfermedadFrecuenteService,
    private actividadService: ActividadesService,
    private notificacion: NotificacionService,
    private ExpedienteServ: ExpedienteService
  ) {
    this.getAlergias();
    this.getActividades();
    this.getEnfermedades();
    this.actividades = [];
    this.alergias = [];
    this.enfermedades = [];
    this.enfermedadesFamiliares = [];
    this.cirugias = [];
    this.medicamentos = [];
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true
    });
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
  getEnfermedades() {
    return this.enfermedadFrecService.getEnfermedades().subscribe(
      (respuesta: EnfermedadesFrecuentes) => (this.enfermedadFrec = respuesta),
      error => {
        this.error = error;
        this.notificacion.msjError(this.error, "Enfermedades");
      }
    );
  }
  next() {
    this.stepper.next();
  }

  addArrayActividades(obj: ActividadfisicaEntidad) {
    this.actividades.push(obj);
    //Codigo para Limpiar el Form
    (<HTMLFormElement>document.getElementById("otrasActividadesForm")).reset();
  }

  addArrayAlergias(obj: AlergiaEntidad) {
    this.alergias.push(obj);
    //Codigo para Limpiar el Form
    (<HTMLFormElement>document.getElementById("otrasAlerigasForm")).reset();
  }

  addArrayEnfermedades(obj: EnfermedadEntidad) {
    this.enfermedades.push(obj);
    //Codigo para Limpiar el Form
    (<HTMLFormElement>document.getElementById("otrasEnfermedades")).reset();
  }
  addArrayEnfermedadesFamiliares(obj: EnfermedadfamiliarEntidad) {
    this.enfermedadesFamiliares.push(obj);
    //Codigo para Limpiar el Form
    (<HTMLFormElement>(
      document.getElementById("enfermedadesFamiliares")
    )).reset();
  }
  addArrayCirugias(obj: CirugiaEntidad) {
    this.cirugias.push(obj);
    //Codigo para Limpiar el Form
    (<HTMLFormElement>document.getElementById("cirugiasForm")).reset();
  }
  addArrayMedicamentos(obj: MedicamentosEntidad) {
    this.medicamentos.push(obj);
    //Codigo para Limpiar el Form
    (<HTMLFormElement>document.getElementById("medicamentosForm")).reset();
  }

  eliminarActividad(doc) {
    const index: number = this.actividades.indexOf(doc);
    if (index !== -1) {
      this.actividades.splice(index, 1);
    }
  }
  eliminarAlergia(doc) {
    const index: number = this.alergias.indexOf(doc);
    if (index !== -1) {
      this.alergias.splice(index, 1);
    }
  }
  eliminarEnfermedad(doc) {
    const index: number = this.enfermedades.indexOf(doc);
    if (index !== -1) {
      this.enfermedades.splice(index, 1);
    }
  }
  eliminarEnfermedadFamiliar(doc) {
    const index: number = this.enfermedadesFamiliares.indexOf(doc);
    if (index !== -1) {
      this.enfermedadesFamiliares.splice(index, 1);
    }
  }
  eliminarCirugias(doc) {
    const index: number = this.cirugias.indexOf(doc);
    if (index !== -1) {
      this.cirugias.splice(index, 1);
    }
  }
  eliminarMedicamentos(doc) {
    const index: number = this.medicamentos.indexOf(doc);
    if (index !== -1) {
      this.medicamentos.splice(index, 1);
    }
  }

  onSubmit(obj: ExpedienteEntidad) {
    obj.fumado = this.fuma ? 0 : 1;
    obj.alcohol = this.toma ? 0 : 1;

    return this.ExpedienteServ.createExpediente(obj).subscribe(
      (respuesta: Expediente) => {
        this.datosExpediente = respuesta;
        //this.idExpediente = this.datosExpediente.expediente["id"];
        console.log("Datos", this.datosExpediente.expediente["id"]);
        console.log("Id expediente", this.idExpediente);
        // this.router.navigate(["/"],{queryParams: { create: "true" }}
        // );
        if (this.actividades.length > 0) {
          this.actividades.forEach(element => {
            element.expedientes_id = [this.datosExpediente.expediente["id"]];
            console.log(element);
            this.actividadService.createActividad(element).subscribe(
              (respuestaActividades: Actividadfisica) => {
                this.datosActividades = respuestaActividades;
                console.log(
                  "Element",
                  element,
                  "Datos de repuesta",
                  this.datosActividades
                );
              },
              error => {
                this.error = error;
                this.notificacion.msjValidacion(this.error);
                console.log("Error", error);
              }
            );
          });
        }
        if (this.alergias.length > 0) {
        }
        if (this.enfermedades.length > 0) {
        }
        if (this.enfermedadesFamiliares.length > 0) {
        }
        if (this.cirugias.length > 0) {
        }
        if (this.medicamentos.length > 0) {
        }
        //Mae aqui le dejo las validaciones.

        console.log("expediente", obj);
      },
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
        console.log("Error", error);
      }
    );
  }
}
