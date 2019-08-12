import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpedienteasociadoRoutingModule } from './expedienteasociado-routing.module';
import { ExpasociadoComponent } from './expasociado/expasociado.component';
import { ListaexpedienteComponent } from './listaexpediente/listaexpediente.component';
import { AsignarexpedienteComponent } from './asignarexpediente/asignarexpediente.component';


@NgModule({
  declarations: [ExpasociadoComponent, ListaexpedienteComponent, AsignarexpedienteComponent],
  imports: [
    CommonModule,
    ExpedienteasociadoRoutingModule
  ]
})
export class ExpedienteasociadoModule { }
