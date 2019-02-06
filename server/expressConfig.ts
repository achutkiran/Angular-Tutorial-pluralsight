import {Express} from 'express'
import * as  cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as session from 'express-session'
import * as passport from 'passport';
import * as express from 'express';
import * as path from 'path';

let rootPath = path.normalize(__dirname + '/../../');

export default function(app:Express){
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(session({
        secret: 'sdfffffffsdffffsfrewrrtgy',
        resave: false,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    
    app.use(express.static(rootPath));
    app.use(express.static(rootPath + '/dist'));
    app.use('/events',express.static(rootPath));
}