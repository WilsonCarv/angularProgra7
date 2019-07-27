import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';

const routes: Routes = [
  {path: 'home/acercade', component: AcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
