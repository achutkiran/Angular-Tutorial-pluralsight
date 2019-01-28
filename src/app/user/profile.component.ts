import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./profile.component.html',
    styles:[`
        .flexForm {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    `]
})

export class ProfileComponent implements OnInit {
    profileForm:FormGroup

    constructor(private authService:AuthService, private router: Router) { }

    ngOnInit() {
        let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
        let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        })
    }

    saveProfile(formValues){
        if(this.profileForm.valid){
            this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
            this.router.navigate(['events'])
        }
    }

    cancel(){
        this.router.navigate(['events'])
    }
}