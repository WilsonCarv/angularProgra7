import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../share/models/doctor';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';


@Component({
  selector: 'app-lista-doctores',
  templateUrl: './lista-doctores.component.html',
  styleUrls: ['./lista-doctores.component.css']
})
export class ListaDoctoresComponent implements OnInit {
  datos: Doctor;
  usuariosDoctores: UserEntidad[];
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private autentification: AuthenticationService,
    private notificacion: NotificacionService
  ) { }

  ngOnInit() {
    this.autentification
    .getDoctores()
    .subscribe(
      (respuesta: Doctor) => (this.datos = respuesta),
      error => (this.error = error)
    );
  }

}
