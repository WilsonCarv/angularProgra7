import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaComponent } from "./lista/lista.component";
const routes: Routes = [
  {
    path: "listaActividadesFisicas",
    component: ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadfisicafrecRoutingModule {}
