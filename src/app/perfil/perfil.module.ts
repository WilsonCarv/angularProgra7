import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PerfilRoutingModule } from "./perfil-routing.module";
import { ExpedienteComponent } from "./expediente/expediente.component";
import { FormsModule } from "@angular/forms";
import { UpdateexpedienteComponent } from './updateexpediente/updateexpediente.component';
import { CompartirexpedienteComponent } from './compartirexpediente/compartirexpediente.component';


@NgModule({
  declarations: [ExpedienteComponent, UpdateexpedienteComponent, CompartirexpedienteComponent],
  imports: [CommonModule, PerfilRoutingModule, FormsModule]
})
export class PerfilModule {}
