import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PerfilRoutingModule } from "./perfil-routing.module";
import { ExpedienteComponent } from "./expediente/expediente.component";
import { FormsModule } from "@angular/forms";
import { UpdateexpedienteComponent } from './updateexpediente/updateexpediente.component';


@NgModule({
  declarations: [ExpedienteComponent, UpdateexpedienteComponent],
  imports: [CommonModule, PerfilRoutingModule, FormsModule]
})
export class PerfilModule {}
