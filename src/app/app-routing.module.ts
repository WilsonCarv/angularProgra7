import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./core/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "usuario",
    loadChildren: "./user/user.module#UserModule"
    // loadChildren: () => import("./user/user.module").then(mod => mod.UserModule)
  },
  {
    path: "doctor",
    loadChildren: "./doctor/doctor.module#DoctorModule"
    // loadChildren: () => import("./user/user.module").then(mod => mod.UserModule)
  },
  {
    path: "alergiafrecuente",
    loadChildren: "./alergiasfrec/alergiasfrec.module#AlergiasfrecModule"
    // loadChildren: () => import("./user/user.module").then(mod => mod.UserModule)
  },
  {
    path: "home",
    // loadChildren: "./home/home.module#HomeModule"
    loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule)
  },
  {
    path: "userUpdate",
    loadChildren: "./user-update/user-update.module#User-UpdateModule"
    //loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule)
  },

  {
    path: "enfermedades",
    loadChildren: "./enfermedades/enfermedades.module#EnfermedadesModule"
    //loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule)
  },

  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
