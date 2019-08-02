import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { MedicoComponent } from './medico/medico.component';


const routes: Routes = [{
  path: 'doctor',
    component: MedicoComponent,
    children: [
      {
        path: 'registrar',
        component: CreateDoctorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
