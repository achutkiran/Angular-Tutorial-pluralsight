import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { IEvent, ISession } from './event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

const apiUrl = environment.apiUrl
@Injectable()
export class EventService {

  constructor(private http:HttpClient) { }
  getEvents():Observable<IEvent[]>{
    return this.http.get<IEvent[]>(apiUrl+"/events",{withCredentials:true})
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])))
  }

  
  getEvent (id:number):Observable<IEvent>{
    return this.http.get<IEvent>(apiUrl+`/events/${id}`,{withCredentials:true})
    .pipe(catchError(this.handleError<IEvent>('getEvent')))
  }
  
  saveEvent(event:IEvent):Observable<IEvent>{
    return this.http.post<IEvent>(apiUrl+`/events`,event,{
      headers: new HttpHeaders({'Content-Type':'application/json'}),
      withCredentials:true
    })
    .pipe(catchError(this.handleError<IEvent>('saveEvent')))
  }
  
  searchSessions(searchTerm:string):Observable<ISession[]>{
    return this.http.get<ISession[]>(apiUrl+'/sessions/search?search='+searchTerm,{withCredentials:true})
    .pipe(catchError(this.handleError<ISession[]>('searchSessions')))
  }
  
  private handleError<T> (operation="operaion", result?: T) {
    return (error: any): Observable<T> =>{
      console.error(error);
      return of(result as T);
    }
  }
}

