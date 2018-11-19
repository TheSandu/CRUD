const config = require("../config.json");
const express = require( "express" );
const bodyParser = require( "body-parser" );


const server = express();

server.use( bodyParser.json() );
server.use( bodyParser.urlencoded( { extended: true } ) );

server.use( (req, res, next) => {

    if( config.corsAllow )
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    }

    next();
});


server.listen( 3000,  () => {
    DB = new DB(  );
});

module.exports = server;