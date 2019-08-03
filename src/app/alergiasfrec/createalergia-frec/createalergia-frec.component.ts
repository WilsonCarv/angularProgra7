import { Component, OnInit } from '@angular/core';
import { Alergiafrec } from 'src/app/share/models/alergiafrec';
import { AlergiafrecEntidad } from 'src/app/share/models/alergiafrec-entidad';
import { AlergiafrecService } from 'src/app/share/alergiafrec.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { FormBuilder, FormGroup } from '@angular/forms';
export interface ErrorEntidad {
  errors: { field: string; message: string }[];
}

@Component({
  selector: 'app-createalergia-frec',
  templateUrl: './createalergia-frec.component.html',
  styleUrls: ['./createalergia-frec.component.css']
})
export class CreatealergiaFrecComponent implements OnInit  {

  datos: Alergiafrec;
  error: any;
  selectedFile = null;
  form: FormGroup;


  constructor(
    private router: Router,
    private alegFrecService: AlergiafrecService ,
    private notificacion: NotificacionService
  ) {
  }

  ngOnInit() {
  }
  onSubmit(obj: AlergiafrecEntidad) {
    obj.Active = true;
    return this.alegFrecService.createalergiaFrec(obj).subscribe(
      (respuesta: Alergiafrec) => {
        this.datos = respuesta;
        this.router.navigate(['/alergiafrecuente/list'], {
          queryParams: { create: 'true' }
        });
      },
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      }
    );
  }
  onBack() {
    this.router.navigate(['/alergiafrecuente']);
  }
  onFileSelected(event) {
    console.log("Imagen", event.target.files[0]);
    this.selectedFile = event.target.files[0];
  }


  }


