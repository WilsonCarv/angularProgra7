import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { MedicoComponent } from './medico/medico.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateDoctorComponent, MedicoComponent],
  imports: [
    CommonModule, FormsModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
