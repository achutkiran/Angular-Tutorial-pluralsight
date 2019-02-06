import * as path from 'path';
import {Express, Request, Response} from 'express'
import { authenticate, getCurrentIdentity } from './auth';
import { updateUser } from './controllers/userController';
import { getEvents, getEvent, saveEvent, searchSessions, deleteVoter, addVoter } from './controllers/eventController';

export default function(app:Express){
    app.post('/api/login', authenticate);
    app.get('/api/currentIdentity', getCurrentIdentity);
    app.put('/api/users/:id', updateUser);

    app.get('/api/events', getEvents);
    app.get('/api/events/:eventId', getEvent);
    app.post('/api/events', saveEvent);
    app.get('/api/sessions/search', searchSessions);
    app.delete('/api/events/:eventId/sessions/:sessionId/voters/:voterId', deleteVoter);
    app.post('/api/events/:eventId/sessions/:sessionId/voters/:voterId', addVoter);
    
    app.post('/api/logout', function(req:Request, res:Response) {
        req.logout();
        res.end();
    });
    
    app.get('/app/*', function(req:Request, res:Response) {
        res.sendStatus(404);
    });
    
    app.get('/node_modules/*', function(req:Request, res:Response) {
        res.sendStatus(404);
    });

    app.get('/events/*', function(req:Request, res:Response) {
        res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
    });
    app.get('/user/*', function(req:Request, res:Response) {
        res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
    });
    app.get('/404', function(req:Request, res:Response) {
        res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
    });
    app.get('/', function(req:Request, res:Response) {
        res.sendFile(path.resolve(__dirname + '/../../dist/index.html'));
    });
    
    app.get('*', function(req:Request, res:Response) {
        console.log('404 error', req.path);
        res.sendStatus(404);
    });
}