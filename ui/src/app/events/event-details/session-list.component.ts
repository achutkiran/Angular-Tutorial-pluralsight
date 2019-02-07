import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared/event.model';
import { VoterService } from './voter.service';
import { AuthService } from 'src/app/user/auth.service';

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
        .flexBox {
            display:flex;
            flex-direction: row;
        }
        .votes {
            padding-left: 8px;
            padding-right: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .pointer {
            cursor: pointer;
        }
    `]
})

export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[]
    @Input() filterBy:string
    @Input() sortBy:string
    @Input() eventId: number
    visibleSessions: ISession[]

    constructor(private voterService:VoterService, private userService:AuthService) { }

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
    public userHasVoted(session:ISession){
        let userName = this.userService.fetchCurrentUserName()
        return this.voterService.userHasVoted(session,userName)
    }

    public addVoter(session: ISession){
        let userName = this.userService.fetchCurrentUserName()
        this.voterService.addVoter(this.eventId,session,userName)
        if(this.sortBy == "votes"){
            this.visibleSessions.sort(this.sortByVoteDesc)
        }
    }
    
    public removeVoter(session: ISession){
        let userName = this.userService.fetchCurrentUserName()
        this.voterService.deleteVoter(this.eventId,session,userName)
        if(this.sortBy == "votes"){
            this.visibleSessions.sort(this.sortByVoteDesc)
        }
    }

    public loggedIn():boolean{
        return this.userService.isAuthenticated()
    }


}