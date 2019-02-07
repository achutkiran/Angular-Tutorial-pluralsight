import {Express} from 'express'
import * as  cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as session from 'express-session'
import * as passport from 'passport';
import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
const whitelist = ['http://localhost:4200']

const corsOptions:cors.CorsOptions = {
    origin: function (origin, callback) {
        if(whitelist.indexOf(origin) !== -1){
            callback(null, true)
        }
        else {
            callback(null, false)
        }
    },
    credentials:true
}

let rootPath = path.normalize(__dirname + '/../../');

export default function(app:Express){
    app.use(cors(corsOptions))
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