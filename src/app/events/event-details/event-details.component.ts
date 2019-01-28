import { Component } from "@angular/core";
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
    templateUrl:'./event-details.component.html',
    styles: [`
        .event-image { height:100px; }
    `]
})

export class EventDetailsComponent {
    event:IEvent
    constructor (private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit(){
        let id:number = parseInt(this.route.snapshot.params['id']) 
        this.event = this.eventService.getEvent(id)
    }
}