const server = require( "../Routes/Routes" );
const bodyParser = require( "body-parser" );
const Env = require( "../Controllers/Env" );
const path = require('path');

server.set( "view engine", "ejs" );
server.set('views', "D:\\CRUD\\Views\\pages" );

server.use( bodyParser.json() );
server.use( bodyParser.urlencoded( { extended: true } ) );
server.use( Env.corsAllow );

server.listen( 3000, Env.onServerStart );