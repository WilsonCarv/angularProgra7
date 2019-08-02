import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: './user/user.module#UserModule'
    // loadChildren: () => import("./user/user.module").then(mod => mod.UserModule)
  },
  {
<<<<<<< HEAD

    path: 'doctor',
    loadChildren: './doctor/doctor.module#DoctorModule'
=======
    path: "doctor",
    loadChildren: "./doctor/doctor.module#DoctorModule"
>>>>>>> 6a2a3931d745f85151787d078f22f633ce80f8fa
    // loadChildren: () => import("./user/user.module").then(mod => mod.UserModule)
  },
  {
    path: 'home',
    // loadChildren: "./home/home.module#HomeModule"
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: "user-update",
    loadChildren: "./user-update/user-update.module#User-UpdateModule"
    //loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule)
  },

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
