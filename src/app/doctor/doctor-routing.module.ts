<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { MedicoComponent } from './medico/medico.component';
import { ListaDoctoresComponent } from './lista-doctores/lista-doctores.component';
=======
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateDoctorComponent } from "./create-doctor/create-doctor.component";
import { MedicoComponent } from "./medico/medico.component";
>>>>>>> 6a2a3931d745f85151787d078f22f633ce80f8fa

const routes: Routes = [
  {
    path: "doctor",
    component: MedicoComponent,
    children: [
      {
        path: "registrar",
        component: CreateDoctorComponent
      },
      {
        path: 'list',
        component: ListaDoctoresComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule {}
