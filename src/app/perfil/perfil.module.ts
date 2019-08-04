import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PerfilRoutingModule } from "./perfil-routing.module";
import { ExpedienteComponent } from "./expediente/expediente.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ExpedienteComponent],
  imports: [CommonModule, PerfilRoutingModule, FormsModule]
})
export class PerfilModule {}
