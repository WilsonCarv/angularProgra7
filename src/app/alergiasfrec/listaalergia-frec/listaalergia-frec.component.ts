import { Component, OnInit } from '@angular/core';
import { Alergiafrec } from '../../share/models/alergiafrec';
import { AlergiafrecEntidad } from 'src/app/share/models/alergiafrec-entidad';
import { AlergiafrecService } from 'src/app/share/alergiafrec.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';


@Component({
  selector: 'app-listaalergia-frec',
  templateUrl: './listaalergia-frec.component.html',
  styleUrls: ['./listaalergia-frec.component.css']
})
export class ListaalergiaFrecComponent implements OnInit {
  datos: Alergiafrec;
  alergias: AlergiafrecEntidad[];
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alergiaServ: AlergiafrecService,
    private notificacion: NotificacionService
  ) { }

  ngOnInit() {
    let notifC = false;
    let notifM = false;
    // Mensajes
    this.route.queryParams.subscribe(params => {
      notifC = params.create || false;
      notifM = params.update || false;
    });
    if (notifC) {
      this.notificacion.msjSuccess('Alergia registrada!', 'Registar alergia');
    }
    if (notifM) {
      this.notificacion.msjSuccess(
        'Videojuego actualizado!',
        'Actualizar Videojuego'
      );
    }
    this.alergiaServ
    .getAlergiasF()
    .subscribe(
      (respuesta: Alergiafrec) => (this.datos = respuesta),
      error => (this.error = error)

    );
    console.log('datos', this.datos);
  }


}
