import { Injectable } from "@angular/core";
import { ISession } from '../shared/event.model';

@Injectable()
export class VoterService {
    userHasVoted(session:ISession,userName:string):boolean{
        return session.voters.includes(userName)
    }
    
    deleteVoter(session:ISession, userName:string){
        session.voters = session.voters.filter(v => v != userName)
    }

    addVoter(session:ISession, userName:string){
        session.voters.push(userName)
    }
}