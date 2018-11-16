const config = require("../config.json");
const express = require("express");

const app = express();

class Server {
    constructor( serverSettings )
    {
        this.port = serverSettings.port || process.env.SERVER_PORT || config.serverPort || 3000;
        this.host = serverSettings.host || process.env.SERVER_IP || config.serverIP || "127.0.0.1";
        this.listen = app.listen;
    }

    start()
    {
        this.listen( this.port, this.host, ()=>{
            console.log( "//--------------" , this.port, this.host );
            console.log( config.serverIP );
        });
    }

    routeStart()
    {

    }
}


module.exports = Server;