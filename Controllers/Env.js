/**
 * 
 * This controller have server side functions
 * such as headers, on server start event, etc.
 * 
 */


const config = require("../config.json");

exports.corsAllow = (req, res, next) => {

    if( config.corsAllow )
    {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    }
    next();
}

exports.onServerStart = (  ) => {
    console.log( "Server Start" );
};