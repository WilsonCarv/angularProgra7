import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActividadfisicafrecRoutingModule } from "./actividadfisicafrec-routing.module";
import { ListaComponent } from "./lista/lista.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ListaComponent],
  imports: [CommonModule, ActividadfisicafrecRoutingModule, FormsModule]
})
export class ActividadfisicafrecModule {}
