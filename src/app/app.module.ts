import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ShareModule } from './share/share.module';
import { UserModule } from './user/user.module';
import { JwtInterceptor } from './share/helpers/jwt.interceptor';
import { ErrorInterceptor } from './share/helpers/error.interceptor';
import { fakeBackendProvider } from './share/helpers/fake-backend';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HomeModule,
    ShareModule,
    UserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // proveedor utilizado para crear backend falso
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
