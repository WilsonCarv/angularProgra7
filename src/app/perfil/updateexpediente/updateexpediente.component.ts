import { Component, OnInit } from "@angular/core";
import Stepper from "bs-stepper";
import { ActivatedRoute, Router } from "@angular/router";
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
import { EnfermedadfamiliarService } from "src/app/share/enfermedadfamiliar.service";
import { EnfermedadService } from "src/app/share/enfermedad.service";
import { AlergiaService } from "src/app/share/alergia.service";
import { ActividadesService } from "src/app/share/actividades.service";
import { CirugiasService } from "src/app/share/cirugias.service";
import { MedicamentosService } from "src/app/share/medicamentos.service";
import { ActividadesFisicasEntidad } from "../../share/models/actividades-fisicas-entidad";
import { UserEntidad } from "src/app/share/models/user-entidad";
import { NgForm } from "@angular/forms";
import { Cirugia } from "src/app/share/models/cirugia";
import { CirugiaEntidad } from "src/app/share/models/cirugia-entidad";
import { Medicamentos } from "src/app/share/models/medicamentos";
import { MedicamentosEntidad } from "src/app/share/models/medicamentos-entidad";
import { UsuarioLogin } from "src/app/share/models/usuarioLogin";
import { AuthenticationService } from "src/app/share/authentication.service";

@Component({
  selector: "app-updateexpediente",
  templateUrl: "./updateexpediente.component.html",
  styleUrls: ["./updateexpediente.component.css"]
})
export class UpdateexpedienteComponent implements OnInit {
  name = "Angular";
  fuma = true;
  toma = true;
  otraActividadName = "";
  currentUser: UsuarioLogin;
  idExpediente: number;
  expediente: ExpedienteEntidad;
  otraActividad: ActividadfisicaEntidad;
  otraAlergia: AlergiaEntidad;
  otraEnfermedad: EnfermedadEntidad;
  otraEnfermedadFamiliar: EnfermedadfamiliarEntidad;
  cirugia: CirugiaEntidad;
  medicamento: MedicamentosEntidad;
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
  currentExpediente: Expediente;
  currentExpedienteEntidad: ExpedienteEntidad;
  enfermedadesFamiliares: Array<EnfermedadfamiliarEntidad>;
  // Enfermedades;
  error: any;
  datosExpediente: Expediente;
  datosActividades: Actividadfisica;
  datosAlergias: Alergia;
  datosEnfermedad: Enfermedad;
  datosEnfermedadFamiliar: Enfermedadfamiliar;
  datosCirugia: Cirugia;
  datosMedicamentos: Medicamentos;
  private stepper: Stepper;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alergiaFrecuenteService: AlergiafrecService,
    private actividadFrecuenteService: ActividadesFisicasService,
    private enfermedadFrecService: EnfermedadFrecuenteService,
    private enfemedadSerive: EnfermedadService,
    private enfermedadFamiliarService: EnfermedadfamiliarService,
    private actividadService: ActividadesService,
    private alergiaService: AlergiaService,
    private medicamentoService: MedicamentosService,
    private cirugiaSerive: CirugiasService,
    private notificacion: NotificacionService,
    private ExpedienteServ: ExpedienteService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
    this.createEntities();
    this.getAlergias();
    this.getActividades();
    this.getEnfermedades();
    this.actividades = [];
    this.alergias = [];
    this.enfermedades = [];
    this.enfermedadesFamiliares = [];
    this.cirugias = [];
    this.medicamentos = [];
    this.selectedActividades = [];
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true
    });
    this.getExpedienteData();
  }

  createEntities() {
    this.otraActividad = {
      id: null,
      nombre: "",
      tiempo_al_dia: "",
      veces_por_semana: null,
      created_at: null,
      updated_at: null,
      deleted_at: null,
      user: null,
      expedientes_id: []
    };
    this.otraAlergia = {
      id: null,
      nombre: "",
      categoria: "",
      reaccion: "",
      observaciones: "",
      created_at: null,
      updated_at: null,
      deleted_at: null,
      user: null,
      expedientes_id: []
    };
    this.otraEnfermedad = {
      id: null,
      nombre: "",
      observaciones: "",
      imagen: "",
      created_at: null,
      updated_at: null,
      deleted_at: null,
      user: null,
      expedientes_id: []
    };
    this.otraEnfermedadFamiliar = {
      id: null,
      nombre: "",
      observaciones: "",
      quien_padece: "",
      created_at: null,
      updated_at: null,
      deleted_at: null,
      user: null,
      expedientes_id: []
    };
    this.medicamento = {
      id: null,
      nombre: "",
      descripcion: "",
      created_at: null,
      updated_at: null,
      deleted_at: null,
      user: null,
      expedientes_id: []
    };
    this.cirugia = {
      id: null,
      nombre: "",
      cuando: "",
      donde: "",
      descripcion: "",
      created_at: null,
      updated_at: null,
      deleted_at: null,
      user: null,
      expedientes_id: []
    };
  }

  getExpedienteData() {
    let params = +this.route.snapshot.paramMap.get("id");
    console.log("Parametros", params);
    this.ExpedienteServ.getExpedienteById(params).subscribe(
      (respuesta: Expediente) => {
        this.currentExpediente = respuesta;
        console.log(this.currentExpediente.expediente[0]);
        if (this.currentExpediente.expediente[0]["fumado"] == 1) {
          this.fuma = false;
        }
        if (this.currentExpediente.expediente[0]["alcohol"] == 1) {
          this.toma = false;
        }

        this.currentExpediente.expediente[0][
          "actividades_fisicas_frecuentes"
        ].forEach(element => {
          this.selectedActividades.push(element.id);
        });

        this.currentExpediente.expediente[0]["actividades_fisicas"].forEach(
          element => {
            this.actividades.push(element);
          }
        );

        this.currentExpediente.expediente[0]["alergias"].forEach(element => {
          this.alergias.push(element);
        });

        this.currentExpediente.expediente[0]["cirugias"].forEach(element => {
          this.cirugias.push(element);
        });

        this.currentExpediente.expediente[0]["enfermedades"].forEach(
          element => {
            this.enfermedades.push(element);
          }
        );

        this.currentExpediente.expediente[0]["enfermedades_familiares"].forEach(
          element => {
            this.enfermedadesFamiliares.push(element);
          }
        );

        this.currentExpediente.expediente[0]["medicamentos"].forEach(
          element => {
            this.medicamentos.push(element);
          }
        );
      },

      // console.log(
      //   "Current Expediente",
      //   this.currentExpedienteEntidad.identificacion
      // )
      error => {
        this.error = error;
        this.notificacion.msjError(this.error, "Alergias");
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
    if (this.actividades.includes(this.otraActividad)) {
      const index = this.actividades.indexOf(this.otraActividad);
      if (this.otraActividad.id != null) {
        this.actividades.map(element => {
          if (element.id == this.otraActividad.id) {
            element.veces_por_semana = obj.veces_por_semana;
            element.tiempo_al_dia = obj.tiempo_al_dia;
            element.nombre = obj.nombre;
          }
        }, console.log("New array", this.actividades));
      } else {
        this.actividades[index] = obj;
        console.log("Modifica nuevo", this.actividades);
      }
      this.createEntities();
    } else {
      this.actividades.push(obj);
      //Codigo para Limpiar el Form
      (<HTMLFormElement>(
        document.getElementById("otrasActividadesForm")
      )).reset();
    }
  }

  addArrayAlergias(obj: AlergiaEntidad) {
    if (this.alergias.includes(this.otraAlergia)) {
      const index = this.alergias.indexOf(this.otraAlergia);
      if (this.otraAlergia.id != null) {
        this.alergias.map(element => {
          if (element.id == this.otraAlergia.id) {
            element.nombre = obj.nombre;
            element.categoria = obj.categoria;
            element.reaccion = obj.reaccion;
            element.observaciones = obj.observaciones;
          }
        }, console.log("New array", this.alergias));
      } else {
        this.alergias[index] = obj;
        console.log("Modifica nuevo", this.alergias);
      }
      this.createEntities();
    } else {
      this.alergias.push(obj);
      //Codigo para Limpiar el Form
      (<HTMLFormElement>document.getElementById("otrasAlerigasForm")).reset();
    }
  }

  addArrayEnfermedades(obj: EnfermedadEntidad) {
    if (this.enfermedades.includes(this.otraEnfermedad)) {
      const index = this.enfermedades.indexOf(this.otraEnfermedad);
      if (this.otraEnfermedad.id != null) {
        this.enfermedades.map(element => {
          if (element.id == this.otraAlergia.id) {
            element.nombre = obj.nombre;
            element.observaciones = obj.observaciones;
          }
        }, console.log("New array", this.alergias));
      } else {
        this.enfermedades[index] = obj;
        console.log("Modifica nuevo", this.enfermedades);
      }
      this.createEntities();
    } else {
      this.enfermedades.push(obj);
      //Codigo para Limpiar el Form
      (<HTMLFormElement>document.getElementById("otrasEnfermedades")).reset();
    }
  }
  addArrayEnfermedadesFamiliares(obj: EnfermedadfamiliarEntidad) {
    if (this.enfermedadesFamiliares.includes(this.otraEnfermedadFamiliar)) {
      const index = this.enfermedadesFamiliares.indexOf(
        this.otraEnfermedadFamiliar
      );
      if (this.otraEnfermedadFamiliar.id != null) {
        this.enfermedadesFamiliares.map(element => {
          if (element.id == this.otraEnfermedadFamiliar.id) {
            element.nombre = obj.nombre;
            element.quien_padece = obj.quien_padece;
            element.observaciones = obj.observaciones;
          }
        }, console.log("New array", this.alergias));
      } else {
        this.enfermedadesFamiliares[index] = obj;
        console.log("Modifica nuevo", this.enfermedadesFamiliares);
      }
      this.createEntities();
    } else {
      this.enfermedadesFamiliares.push(obj);
      //Codigo para Limpiar el Form
      (<HTMLFormElement>(
        document.getElementById("enfermedadesFamiliares")
      )).reset();
    }
  }
  addArrayCirugias(obj: CirugiaEntidad) {
    if (this.cirugias.includes(this.cirugia)) {
      const index = this.cirugias.indexOf(this.cirugia);
      if (this.cirugia.id != null) {
        this.cirugias.map(element => {
          if (element.id == this.cirugia.id) {
            element.nombre = obj.nombre;
            element.donde = obj.donde;
            element.cuando = obj.cuando;
            element.descripcion = obj.descripcion;
          }
        }, console.log("New array", this.alergias));
      } else {
        this.cirugias[index] = obj;
        console.log("Modifica nuevo", this.cirugias);
      }
      this.createEntities();
    } else {
      this.cirugias.push(obj);
      //Codigo para Limpiar el Form
      (<HTMLFormElement>document.getElementById("cirugiasForm")).reset();
    }
  }
  addArrayMedicamentos(obj: MedicamentosEntidad) {
    if (this.medicamentos.includes(this.medicamento)) {
      const index = this.medicamentos.indexOf(this.medicamento);
      if (this.cirugia.id != null) {
        this.medicamentos.map(element => {
          if (element.id == this.medicamento.id) {
            element.nombre = obj.nombre;
            element.descripcion = obj.descripcion;
          }
        }, console.log("New array", this.alergias));
      } else {
        this.medicamentos[index] = obj;
        console.log("Modifica nuevo", this.medicamentos);
      }
      this.createEntities();
    } else {
      this.medicamentos.push(obj);
      //Codigo para Limpiar el Form
      (<HTMLFormElement>document.getElementById("medicamentosForm")).reset();
    }
  }

  modificiarActividad(doc: ActividadfisicaEntidad) {
    this.otraActividad = doc;
  }
  modificarAlergia(doc: AlergiaEntidad) {
    this.otraAlergia = doc;
    // const index: number = this.alergias.indexOf(doc);
    // if (index !== -1) {
    //   this.alergias.splice(index, 1);
    // }
  }
  modificarEnfermedad(doc: EnfermedadEntidad) {
    this.otraEnfermedad = doc;
    // const index: number = this.enfermedades.indexOf(doc);
    // if (index !== -1) {
    //   this.enfermedades.splice(index, 1);
    // }
  }
  modificarEnfermedadFamiliar(doc: EnfermedadfamiliarEntidad) {
    this.otraEnfermedadFamiliar = doc;
    // const index: number = this.enfermedadesFamiliares.indexOf(doc);
    // if (index !== -1) {
    //   this.enfermedadesFamiliares.splice(index, 1);
    // }
  }
  modificarCirugias(doc: CirugiaEntidad) {
    this.cirugia = doc;
    // const index: number = this.cirugias.indexOf(doc);
    // if (index !== -1) {
    //   this.cirugias.splice(index, 1);
    // }
  }
  modificarMedicamentos(doc: MedicamentosEntidad) {
    this.medicamento = doc;
    // const index: number = this.medicamentos.indexOf(doc);
    // if (index !== -1) {
    //   this.medicamentos.splice(index, 1);
    // }
  }

  onSubmit(obj: ExpedienteEntidad) {
    obj.fumado = this.fuma ? 0 : 1;
    obj.alcohol = this.toma ? 0 : 1;
    obj.id = this.currentExpediente.expediente[0]["id"];
    console.log(
      "Expediente",
      obj,
      "id",
      this.currentExpediente.expediente[0]["id"]
    );
    return this.ExpedienteServ.updateExpediente(obj).subscribe(
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
            if (element.id != null) {
              console.log("Element update", element);
              this.actividadService
                .updateActividad(element)
                .subscribe((respuestaActividades: Actividadfisica) => {
                  this.datosActividades = respuestaActividades;
                  console.log(
                    "Element",
                    element,
                    "Datos de repuesta",
                    this.datosActividades
                  );
                });
            } else {
              element.expedientes_id = [this.datosExpediente.expediente["id"]];
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
            }
          });
        }
        if (this.alergias.length > 0) {
          this.alergias.forEach(element => {
            element.expedientes_id = [this.datosExpediente.expediente["id"]];
            if (element.id != null) {
              this.alergiaService.updateAlergia(element).subscribe(
                (respuestaAlergias: Alergia) => {
                  this.datosAlergias = respuestaAlergias;
                  console.log(
                    "Element",
                    element,
                    "Datos de repuesta",
                    this.datosAlergias
                  );
                },
                error => {
                  this.error = error;
                  this.notificacion.msjValidacion(this.error);
                  console.log("Error", error);
                }
              );
            } else {
              this.alergiaService.createAlergia(element).subscribe(
                (respuestaAlergias: Alergia) => {
                  this.datosAlergias = respuestaAlergias;
                  console.log(
                    "Element",
                    element,
                    "Datos de repuesta",
                    this.datosAlergias
                  );
                },
                error => {
                  this.error = error;
                  this.notificacion.msjValidacion(this.error);
                  console.log("Error", error);
                }
              );
            }
          });
        }
        // if (this.enfermedades.length > 0) {
        //   this.enfermedades.forEach(element => {
        //     element.expedientes_id = [this.datosExpediente.expediente["id"]];
        //     console.log(element);
        //     this.enfemedadSerive.createEnfermedad(element).subscribe(
        //       (respuestaEnfermedad: Enfermedad) => {
        //         this.datosEnfermedad = respuestaEnfermedad;
        //         console.log(
        //           "Element",
        //           element,
        //           "Datos de repuesta",
        //           this.datosEnfermedad
        //         );
        //       },
        //       error => {
        //         this.error = error;
        //         this.notificacion.msjValidacion(this.error);
        //         console.log("Error", error);
        //       }
        //     );
        //   });
        // }
        // if (this.enfermedadesFamiliares.length > 0) {
        //   this.enfermedadesFamiliares.forEach(element => {
        //     element.expedientes_id = [this.datosExpediente.expediente["id"]];
        //     console.log(element);
        //     this.enfermedadFamiliarService
        //       .createEnfermedadFamiliar(element)
        //       .subscribe(
        //         (respuestaEnfermedadFamiliar: Enfermedadfamiliar) => {
        //           this.datosEnfermedadFamiliar = respuestaEnfermedadFamiliar;
        //           console.log(
        //             "Element",
        //             element,
        //             "Datos de repuesta",
        //             this.datosEnfermedadFamiliar
        //           );
        //         },
        //         error => {
        //           this.error = error;
        //           this.notificacion.msjValidacion(this.error);
        //           console.log("Error", error);
        //         }
        //       );
        //   });
        // }
        // if (this.cirugias.length > 0) {
        //   this.cirugias.forEach(element => {
        //     element.expedientes_id = [this.datosExpediente.expediente["id"]];
        //     console.log(element);
        //     this.cirugiaSerive.createCirugia(element).subscribe(
        //       (respuestaCirugia: Cirugia) => {
        //         this.datosCirugia = respuestaCirugia;
        //         console.log(
        //           "Element",
        //           element,
        //           "Datos de repuesta",
        //           this.datosCirugia
        //         );
        //       },
        //       error => {
        //         this.error = error;
        //         this.notificacion.msjValidacion(this.error);
        //         console.log("Error", error);
        //       }
        //     );
        //   });
        // }
        // if (this.medicamentos.length > 0) {
        //   this.medicamentos.forEach(element => {
        //     element.expedientes_id = [this.datosExpediente.expediente["id"]];
        //     console.log(element);
        //     this.medicamentoService.createMedicamento(element).subscribe(
        //       (respuestaMedicamento: Medicamentos) => {
        //         this.datosMedicamentos = respuestaMedicamento;
        //         console.log(
        //           "Element",
        //           element,
        //           "Datos de repuesta",
        //           this.datosMedicamentos
        //         );
        //       },
        //       error => {
        //         this.error = error;
        //         this.notificacion.msjValidacion(this.error);
        //         console.log("Error", error);
        //       }
        //     );
        //   });
        // }
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
