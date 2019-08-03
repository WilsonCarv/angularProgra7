import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UserupdateRoutingModule } from "./userupdate-routing.module";
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [UpdateComponent],
  imports: [CommonModule, UserupdateRoutingModule, FormsModule]
})
export class UserupdateModule {}
