import { Component, OnInit } from '@angular/core';
import { Expediente } from "../../share/models/expediente";
import { ExpedienteEntidad } from "../../share/models/expediente-entidad";
import { ExpedienteService } from "src/app/share/expediente.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NotificacionService } from "src/app/share/notificacion.service";
import { UsuarioLogin } from "src/app/share/models/usuarioLogin";
import { AuthenticationService } from "src/app/share/authentication.service"

@Component({
  selector: 'app-listaexpediente',
  templateUrl: './listaexpediente.component.html',
  styleUrls: ['./listaexpediente.component.css']
})
export class ListaexpedienteComponent implements OnInit {
  datos: Expediente;
  Expedientes: ExpedienteEntidad[];
  error: {};
  currentUser: UsuarioLogin;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expdienteSev: ExpedienteService,
    private notificacion: NotificacionService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    this.expdienteSev
    .getExpedientes()
    .subscribe(
      (respuesta: Expediente) => (

        this.datos = respuesta),
      error => (this.error = error)
    );
  console.log("datos", this.datos.expediente.values);
  }

}
