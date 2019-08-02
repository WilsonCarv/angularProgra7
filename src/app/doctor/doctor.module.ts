import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { MedicoComponent } from './medico/medico.component';
import { FormsModule } from '@angular/forms';
import { ListaDoctoresComponent } from './lista-doctores/lista-doctores.component';


@NgModule({
  declarations: [CreateDoctorComponent, MedicoComponent, ListaDoctoresComponent],
  imports: [
    CommonModule, FormsModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
