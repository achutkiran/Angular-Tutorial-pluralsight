import { getNextId } from "./getNextId";
import events from "../database/events";
import { Request, Response } from "express";
import { ISession, IEvents } from "../types";

let nextId = getNextId(events);

export function getEvents(req:Request, res:Response){
    res.send(events);
    res.end();
}

export function getEvent(req:Request, res:Response){
    let event = events.find(e => e.id === parseInt(req.params.eventId))
    res.send(event);
    res.end();
}

export function searchSessions(req:Request, res:Response){
    let term:string =  req.query.search.toLowerCase();
    let results:ISession[] = [];
    events.forEach(e => {
        let matchingSessions = e.sessions.filter(s => s.name.toLowerCase().indexOf(term) > -1)
            .map(s => {
                s['eventId'] = e.id;
                return s;
            })
        results = results.concat(matchingSessions);
    })
    res.send(results);
    res.end();
}

export function deleteVoter(req:Request,res:Response){
    let voterId:string = req.params.voterId;
    let sessionId:number = parseInt(req.params.sessionId);
    let eventId:number = parseInt(req.params.eventId);

    let event = events.find(event => event.id === eventId)
    let session = event.sessions.find(session => session.id === sessionId)
    
    session.voters = session.voters.filter(voter => voter !== voterId);
    res.send(session);
    res.end();
}

export function addVoter(req:Request, res:Response){
    let voterId:string = req.params.voterId;
    let sessionId:number = parseInt(req.params.sessionId);
    let eventId:number = parseInt(req.params.eventId);

    let event = events.find(event => event.id === eventId)
    let session = event.sessions.find(session => session.id === sessionId)
        
    session.voters.push(voterId);
    res.send(session);
    res.end();
}

export function saveEvent(req:Request, res:Response){
    var event:IEvents = req.body;
  
    if (event.id) {
      var index = events.findIndex(e => e.id === event.id)
      events[index] = event
    } 
    else {
      event.id = nextId;
      nextId++;
      event.sessions = [];
      events.push(event);
    }
    res.send(event);
    res.end(); 
}