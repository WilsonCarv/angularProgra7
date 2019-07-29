import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { RolEntidad } from 'src/app/share/models/rol-entidad';
import { UserEntidad } from 'src/app/share/models/user-entidad';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  usuario: UserEntidad;
  datos: UserEntidad;
  roles: RolEntidad;
  error: any;
  constructor(private router: Router, private autentification: AuthenticationService) {
    this.getRoles();
  }

  ngOnInit() {}
  getRoles() {
    this.autentification.getRoles().subscribe((respuesta: RolEntidad) => (this.roles = respuesta), error => (this.error = error));
  }
    // sucess
    onsubmit(obj: UserEntidad) {
    this.autentification.createUser(obj).subscribe((respuesta: UserEntidad) => (this.datos),
    // error
    error => (this.error = error),
    // complete
    () => {
      this.router.navigate(['/usuario/login']);
    } );
  }
}
