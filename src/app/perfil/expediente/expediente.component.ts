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
  expediente: ExpedienteEntidad;
  alergiasFrec: Alergiafrec;
  selectedAlergias: Alergiafrec;
  actividadesFrecuentes: ActividadesFisicas;
  selectedActividades: ActividadesFisicas;
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
  addArrayActividades(event) {
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
    (<HTMLFormElement> document.getElementById("otrasActividades")).reset();
  }

  addArrayAlergias(event, otrasForm: NgForm) {
    console.log("Nombre", event.target.nombre.value);
    console.log("categoria", event.target.categoria.value);
    console.log("Reaccion", event.target.reaccion.value);
    console.log("Observaciones", event.target.observacionesAlergia.value);
    const arr = {
      nombre: event.target.nombre.value,
      categoria: event.target.categoria.value,
      reaccion: event.target.reaccion.value,
      observaciones: event.target.observacionesAlergia.value
    };
    this.alergias.push(arr);
    //Codigo para Limpiar el Form
    (<HTMLFormElement> document.getElementById("otrasAlerigas")).reset();
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

  onSubmit(event) {
    this.expediente = new ExpedienteEntidad();

   this.expediente.identificacion = event.target.Identificacion.value;
   this.expediente.nombre = event.target.Nombre.value;
   this.expediente.primer_apellido = event.target.PrimerApellido.value;
   this.expediente.segundo_apellido = event.target.SegundoApellido.value;
   this.expediente.sexo = event.target.sexo.value;
   this.expediente.fecha_nacimiento = event.target.fechaNacimiento.value;
   this.expediente.tipo_sangre = event.target.tipoSangre.value;
   this.expediente.lugar_Residencia = event.target.lugarResidencia.value;
   this.expediente.numero_telefono = event.target.numeroTelefono.value;
   this.expediente.contacto_emergencia = event.target.contactoEmergencia.value;
   if (event.target.customSwitch1.value === true) {
      this.expediente.fumado = 1;
      this.expediente.historial_fumado = event.target.historialFumando.value;
      this.expediente.cantidad_cigarros_dia = event.target.cantidaCigarros.value;
      this.expediente.edad_comenzo_fumar = event.target.edadComenzoFumar.value;
      this.expediente.observaciones_fumado = event.target.observacionesFumado.value;
    } else {
      this.expediente.fumado = 0;
    }
   if (event.target.customSwitch2.value === true) {
      this.expediente.alcohol = 1;
      this.expediente.historial_alcohol = event.target.historialAlcohol.value;
      this.expediente.edad_comenzo_tomar = event.target.edadComenzoTomar.value;
      this.expediente.frecuencia_alcohol = event.target.cantidaToma.value;
      this.expediente.toma_usualmente = event.target.tipoAlcohol.value;
      this.expediente.observaciones_alcohol = event.target.observacionesAlchohol.value;
    } else {
      this.expediente.alcohol = 0;
    }
   console.log("Segundo Apellido", event.target.SegundoApellido.value);
   console.log("Sexo", event.target.sexo.value);
   console.log("Fecha", event.target.fechaNacimiento.value);
   console.log("Alergias", event.target.plataformas_id);
   console.log("Actividades Selecionanadas", this.selectedActividades);
   console.log("Alergias Selecionanadas", this.selectedAlergias);

   return this.ExpedienteServ.createExpediente(this.expediente).subscribe(
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
