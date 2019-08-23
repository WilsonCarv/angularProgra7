import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PerfilModule } from "./perfil.module";
import { ExpedienteComponent } from "./expediente/expediente.component";
import { UpdateexpedienteComponent } from "./updateexpediente/updateexpediente.component";
import { CompartirexpedienteComponent } from "./compartirexpediente/compartirexpediente.component";
const routes: Routes = [
  {
    path: "expediente",
    component: ExpedienteComponent
  },
  {
    path: "updateExpedinte/:id",
    component: UpdateexpedienteComponent
  },
  {
    path: "compartirExpediente/:id",
    component: CompartirexpedienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule {}
