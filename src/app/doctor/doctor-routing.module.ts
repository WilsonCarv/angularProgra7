import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateDoctorComponent } from "./create-doctor/create-doctor.component";
import { MedicoComponent } from "./medico/medico.component";
import { ListaDoctoresComponent } from "./lista-doctores/lista-doctores.component";

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
        path: "list",
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
