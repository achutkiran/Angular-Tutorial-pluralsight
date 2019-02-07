import { Injectable } from "@angular/core";
import { ISession } from '../shared/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService {
    constructor(private http: HttpClient) { }
    private apiUrl:string = environment.apiUrl;

    userHasVoted(session:ISession,userName:string):boolean{
        return session.voters.includes(userName)
    }
    
    deleteVoter(eventId:number,session:ISession, userName:string){
        let url:string = this.apiUrl+`/events/${eventId}/sessions/${session.id}/voters/${userName}`
        this.http.delete(url,{withCredentials:true})
            .pipe(catchError(this.handleError('deleteVoter')))
            .subscribe(() =>{
                session.voters = session.voters.filter(v => v != userName)
            })
    }

    addVoter(eventId:number, session:ISession, userName:string){
        let url:string = this.apiUrl+`/events/${eventId}/sessions/${session.id}/voters/${userName}`
        this.http.post(url,{},{
            headers: new HttpHeaders({'Content-Type':'/application/json'}),
            withCredentials:true
        })
            .pipe(catchError(this.handleError('addVoter')))
            .subscribe(() => {
                session.voters.push(userName)
            })
    }

    private handleError<T> (operation="operaion", result?: T) {
        return (error: any): Observable<T> =>{
          console.error(error);
          return of(result as T);
        }
      }
}