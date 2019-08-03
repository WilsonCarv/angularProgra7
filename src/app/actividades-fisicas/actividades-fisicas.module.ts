import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActividadesFisicasRoutingModule } from "./actividades-fisicas-routing.module";
import { ListaComponent } from "./lista/lista.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ListaComponent],
  imports: [CommonModule, ActividadesFisicasRoutingModule, FormsModule]
})
export class ActividadesFisicasModule {}
