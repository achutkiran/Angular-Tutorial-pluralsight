import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import users from './database/users';
import { IUser } from './types';

let LocalStrategy = passportLocal.Strategy

export default function(){
    passport.use(new LocalStrategy(
        function(username:string, password:string, done){
            let found = users.find(user =>{
                return user.userName.toLowerCase() === username;
            })
            if(found) {
                return done(null, found);
            }
            else {
                return done(null,false);
            }
        }
    ));

    passport.serializeUser(function(user:IUser,done) {
        if(user) {
            done(null, user.id)
        }
    });

    passport.deserializeUser(function(id:number, done) {
        let found = users.find(u => {
            return u.id === id;
        })
        if(found) {
            return done(null,found);
        }
        else{
            return done(null, false);
        }
    })
}