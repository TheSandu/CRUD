/**
 * 
 * This is Server module entry point of project
 * 
 * to start project in cmd or terminal write
 * ../CRUD/Server> node server.js
 * 
 * In this module is made to set all server site functions, ejs view folder
 * In this module is set listiner on ip from config.json and port from config.json
 * 
 * 
 */

const server = require( "../Routes/Routes" );
const Env = require( "../Controllers/Env" );
const path = require('path');
const config = require("../config.json");

server.set( "view engine", "ejs" );
server.set('views', path.dirname( __dirname ) + "\\Views\\pages" );

server.use( Env.corsAllow );
server.listen( config.serverPort, config.serverIP , Env.onServerStart );