import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared/event.model';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html',
    styles:[`
        .selected {
            animation-name: selected-bg-color;
            animation-duration: 3s;
        }
        @keyframes selected-bg-color {
            from { background-color: lightcoral; }
            to { background-color: transparent; }
        }
    `]
})

export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[]
    @Input() filterBy:string
    @Input() sortBy:string
    visibleSessions: ISession[]

    ngOnChanges(){
        if(this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortBy === "name" ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVoteDesc)
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

    private sortByNameAsc(s1:ISession,s2:ISession){
        if(s1.name > s2.name) return 1
        else if(s1.name === s2.name) return 0
        else return -1
    }

    private sortByVoteDesc(s1:ISession,s2:ISession){
        return s2.voters.length - s1.voters.length
        // both equal = 0
        // s2 votes > s1 votes > 0
        // s2 votes < s1 votes < 0
    }


}