import { Component } from "@angular/core";
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
    templateUrl:'./event-details.component.html',
    styles: [`
        .event-image { height:100px; }
        .flexbox { display: flex; align-items: baseline; }
    `]
})

export class EventDetailsComponent {
    event:IEvent
    addMode:boolean = false
    constructor (private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit(){
        let id:number = parseInt(this.route.snapshot.params['id']) 
        this.event = this.eventService.getEvent(id)
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session:ISession) {
        session.id = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}