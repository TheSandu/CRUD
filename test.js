const Server = require("./Server/server");


let server = new Server({
    host: "127.0.0.1",
    port: 3000
});

server.start();

server.routeStart();