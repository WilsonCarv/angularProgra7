import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./home/home.module";
import { ShareModule } from "./share/share.module";
import { UserModule } from "./user/user.module";
import { JwtInterceptor } from "./share/helpers/jwt.interceptor";
import { ErrorInterceptor } from "./share/helpers/error.interceptor";
import { fakeBackendProvider } from "./share/helpers/fake-backend";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { DoctorModule } from "./doctor/doctor.module";
import { AlergiasfrecModule } from "./alergiasfrec/alergiasfrec.module";
import { EnfermedadesModule } from "./enfermedades/enfermedades.module";
import { UserupdateModule } from "./userupdate/userupdate.module";
import { ActividadfisicafrecModule } from "./actividadfisicafrec/actividadfisicafrec.module";
import { PerfilModule } from "./perfil/perfil.module";
import { ExpedienteasociadoModule } from './expedienteasociado/expedienteasociado.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HomeModule,
    ShareModule,
    AlergiasfrecModule,
    EnfermedadesModule,
    ActividadfisicafrecModule,
    UserupdateModule,
    PerfilModule,
    ExpedienteasociadoModule,
    UserModule,
    DoctorModule,
    CoreModule,
    AppRoutingModule,
    DoctorModule,

  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // proveedor utilizado para crear backend falso
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
