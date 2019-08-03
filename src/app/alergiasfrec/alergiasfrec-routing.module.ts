import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlergiasfclaseComponent } from './alergiasfclase/alergiasfclase.component';
import { CreatealergiaFrecComponent } from './createalergia-frec/createalergia-frec.component';
import { ListaalergiaFrecComponent } from './listaalergia-frec/listaalergia-frec.component';


const routes: Routes = [
  {
  path: "alergiafrecuente",
    component: AlergiasfclaseComponent,
    children: [
      {
        path: "registrar",
        component: CreatealergiaFrecComponent
      },
      {
        path: "list",
        component: ListaalergiaFrecComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlergiasfrecRoutingModule { }
