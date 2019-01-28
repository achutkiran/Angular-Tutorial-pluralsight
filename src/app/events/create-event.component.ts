import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl:'./create-event.component.html',
    styles:[`
        .flexForm {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    `]
})

export class CreateEventComponent {
    isDirty:Boolean = true
    newEvent
    constructor(private router:Router) { }

    saveEvent(formValues) {
        console.log(formValues)
    }
    
    cancel(){
        this.router.navigate(['/events'])
    }
}