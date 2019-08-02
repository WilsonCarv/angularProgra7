import { Component, OnInit } from "@angular/core";
import { UserEntidad } from "src/app/share/models/user-entidad";
import { ActivatedRoute, Router } from "@angular/router";

import { UsuarioLogin } from "src/app/share/models/usuarioLogin";
import { AuthenticationService } from "src/app/share/authentication.service";
import { NotificacionService } from "src/app/share/notificacion.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usuario: UserEntidad;
  datos: UsuarioLogin;
  error: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) {
    if (auntenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    let params = +this.route.snapshot.paramMap.get("accion");
    console.log("Parametros", params);
    this.route.queryParams.subscribe(params => {
      if (params.registrado !== undefined && params.registrado === "true") {
        this.notificacion.msjSuccess(
          "Registro de usuario satisfactorio! Por favor especifique las credenciales para ingresar!",
          "Usuario"
        );
      }
    });
  }
  onSubmit(obj: UserEntidad) {
    this.auntenticationService.loginUser(obj).subscribe(
      (respuesta: UsuarioLogin) => {
        this.datos = respuesta;
        this.router.navigate(["/"]);
      },
      error => {
        console.log("Error", error.error.error);
        this.error = error.error.error;
        this.notificacion.msjError(this.error, "Verifique sus credenciales");
      }
    );
  }
}
