import { Component } from "@angular/core";

@Component({
    templateUrl:"./login.component.html",
    styles:[`
        .flexForm {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    `]
})

export class LoginComponent {
    userName:string
    password:string
    login(formValues) {
        console.log(formValues)
    }
}