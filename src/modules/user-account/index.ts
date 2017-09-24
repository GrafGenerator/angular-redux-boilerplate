import { Component, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";

const template = require("./user-account.html");
const styles = require("./user-account.css");

@Component({
  selector: "af-user-account",
  template: template,
  encapsulation: ViewEncapsulation.None,
  styles: [ styles ],
})

export class UserAccount {
};
