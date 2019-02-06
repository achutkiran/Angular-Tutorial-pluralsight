import * as passport from 'passport';
import { Request, Response, NextFunction } from 'express';

export function authenticate(req:Request,res:Response,next:NextFunction) {
    req.body.username = req.body.username.toLowerCase();
    let auth = passport.authenticate('local', function(err, user) {
        if (err) { return next(err); }
        if(!user) { res.sendStatus(403); }
        req.logIn(user, function(err) {
            if(err) {return next(err); }
            res.send({success:true, user: user});
        })
    })
    auth(req,res, next);
};

export function getCurrentIdentity(req:Request, res:Response, next:NextFunction){
    res.status(200).send(req.user);
    res.send();
}

export function requiresApiLogin(req:Request, res:Response, next:NextFunction){
    if(!req.isAuthenticated()){
        res.status(403);
        res.end();
    } else {
        next();
    }
};

export function requiresRole(role:string){
    return function(req:Request, res:Response,next:NextFunction) {
        if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
            res.status(403);
            res.end();
        }
        else {
            next();
        }
    }
}