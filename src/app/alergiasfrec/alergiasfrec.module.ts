import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlergiasfrecRoutingModule } from './alergiasfrec-routing.module';
import { AlergiasfclaseComponent } from './alergiasfclase/alergiasfclase.component';
import { CreatealergiaFrecComponent } from './createalergia-frec/createalergia-frec.component';
import { ListaalergiaFrecComponent } from './listaalergia-frec/listaalergia-frec.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AlergiasfclaseComponent, CreatealergiaFrecComponent, ListaalergiaFrecComponent],
  imports: [
    CommonModule, FormsModule,
    AlergiasfrecRoutingModule
  ]
})
export class AlergiasfrecModule { }
