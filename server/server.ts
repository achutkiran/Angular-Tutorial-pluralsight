import * as express from 'express';

let port = process.env.PORT || 8808

let app = express();
import expressConfig from './expressConfig';
expressConfig(app);

import passport from './passport';
passport();

import routes from './routes';
routes(app);

app.listen(port);
console.log('Listening on port '+ port + '...');