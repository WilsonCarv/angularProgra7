import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { AcercadeComponent } from './acercade/acercade.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [AcercadeComponent, InicioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [InicioComponent]
})
export class HomeModule { }
