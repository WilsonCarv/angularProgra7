import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EnfermedadesRoutingModule } from "./enfermedades-routing.module";
import { ListaComponent } from "./lista/lista.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ListaComponent],
  imports: [CommonModule, EnfermedadesRoutingModule, FormsModule]
})
export class EnfermedadesModule {}
