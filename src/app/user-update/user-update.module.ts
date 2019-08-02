import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserUpdateRoutingModule } from "./user-update-routing.module";
import { UpdateComponent } from "./update/update.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [UpdateComponent],
  imports: [CommonModule, UserUpdateRoutingModule, FormsModule]
})
export class UserUpdateModule {}
