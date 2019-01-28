import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

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
    constructor(private router:Router, private eventService:EventService) { }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }
    
    cancel(){
        this.router.navigate(['/events'])
    }
}