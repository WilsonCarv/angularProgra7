import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpasociadoComponent } from './expasociado/expasociado.component';
import { ListaexpedienteComponent } from './listaexpediente/listaexpediente.component';
import { AsignarexpedienteComponent } from './asignarexpediente/asignarexpediente.component';


const routes: Routes = [
  {
    path: "expasociado",
      component: ExpasociadoComponent,
      children: [
        {
          path: "asignar",
          component: AsignarexpedienteComponent
        },
        {
          path: "list",
          component: ListaexpedienteComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpedienteasociadoRoutingModule { }
