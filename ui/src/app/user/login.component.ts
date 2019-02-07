import { Component, ViewChild } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
    loginInvalid = false
    @ViewChild('loginForm') public loginForm: NgForm

    constructor(private authService:AuthService, private router: Router) { }

    login(formValues) {
        this.authService.loginUser(formValues.userName,formValues.password)
            .subscribe(data => {
                if(!data){
                    this.loginInvalid = true
                    this.loginForm.form.get('password').setErrors({
                        serverError: true
                    })
                }
                else {
                    this.router.navigate(['events'])
                }
            })
    }

    cancel(){
        this.router.navigate(['events'])
    }
}