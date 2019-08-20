import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./share/authentication.service";
import { UsuarioLogin } from "./share/models/usuarioLogin";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  currentUser: UsuarioLogin;
  title = "Expediente";
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }
  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();

    this.router.navigate(["usuario/login"]);
  }
}
