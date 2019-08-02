import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class NotificacionService {
  constructor(private toastr: ToastrService) {}

  msjSuccess(mensaje: string, titulo: string) {
    this.toastr.success(mensaje, titulo, {
      enableHtml: true
    });
  }
  msjError(mensaje: string, titulo: string) {
    this.toastr.error(mensaje, titulo, {
      enableHtml: true
    });
  }
  msjInfo(mensaje: string, titulo: string) {
    this.toastr.info(mensaje, titulo, {
      enableHtml: true
    });
  }
  msjWarning(mensaje: string, titulo: string) {
    this.toastr.warning(mensaje, titulo, {
      enableHtml: true
    });
  }
  msjValidacion(errores: any) {
    let mensaje: string = "";
    if (errores != null) {
      if (errores.error.errors) {
        for (const item of errores.error.errors) {
          mensaje += item.message + " <br />";
        }
      }
      this.msjError(mensaje, errores.error.message);
    }
  }
}
