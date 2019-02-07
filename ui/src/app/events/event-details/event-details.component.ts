import { Component } from "@angular/core";
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
    templateUrl:'./event-details.component.html',
    styles: [`
        .event-image { height:100px; }
        .flexbox { display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap;  }
        mat-radio-button { margin-left: 16px; margin-bottom:16px;}
    `]
})

export class EventDetailsComponent {
    event:IEvent
    addMode:boolean = false
    filterBy:string = "all"
    sortBy: string = "name"
    constructor (private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit(){
        // let id:number = parseInt(this.route.snapshot.params['id']) //It is a bug page doesn't change if it is same page navigation due to onInit
        this.route.data.forEach(data => {
            this.event = data['event']
            this.addMode = false
            this.filterBy = "all"
        })
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