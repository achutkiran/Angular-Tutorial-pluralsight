import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared/event.model';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[]
    @Input() filterBy:string
    visibleSessions: ISession[]

    ngOnChanges(){
        if(this.sessions) {
            this.filterSessions(this.filterBy)
        }
    }

    filterSessions(filter:string){
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0) //used to clone or deep copy
        }
        else {
            this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === filter)
        }
    }
}