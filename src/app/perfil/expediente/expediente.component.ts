import { Component, OnInit } from "@angular/core";
import Stepper from "bs-stepper";

@Component({
  selector: "app-expediente",
  templateUrl: "./expediente.component.html",
  styleUrls: ["./expediente.component.css"]
})
export class ExpedienteComponent implements OnInit {
  name = "Angular";
  fuma = true;
  toma = true;
  private stepper: Stepper;
  constructor() {}

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  changeStatusFuma(event) {
    if (!this.fuma) {
      this.fuma = true;
      console.log("Fuma", this.fuma);
    } else {
      this.fuma = false;
      console.log("Fuma", this.fuma);
    }
    console.log("CheckBox", event);
  }
  changeStatusAlcohol(event) {
    if (!this.toma) {
      this.toma = true;
      console.log("Fuma", this.fuma);
    } else {
      this.toma = false;
      console.log("Fuma", this.fuma);
    }
    console.log("CheckBox", event);
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector("#stepper1"), {
      linear: false,
      animation: true
    });
  }
}
