import { Component, OnInit } from "@angular/core";
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

export class CreateEventComponent implements OnInit {
    isDirty:Boolean = true
    newEvent
    constructor(private router:Router, private eventService:EventService) { }

    ngOnInit() {
        this.newEvent = {
            name: 'Ng Spectacular',
            date:'8/8/2028',
            time: '10am',
            price: 799.99,
            location: {
                address: '456 Happy St',
                city: 'California',
                country: 'USA'
            },
            onlineUrl: 'http://ngSpectacular.com',
            imageUrl: 'http;//ngSpectacular.com/logo.png'
        }
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }
    
    cancel(){
        this.router.navigate(['/events'])
    }
}