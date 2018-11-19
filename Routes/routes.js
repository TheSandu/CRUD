const Route = require( "../Server/Server" );
const Users = require( "../Controllers/Users" );


// API
Route.get( "/api/all/users", Users.getAll);

Route.get( "/api/all/users/where", Users.getAllByQuery);

Route.post( "/api/insert", Users.insertOne );

Route.post( "/api/update", Users.update );

Route.post( "/api/delete", Users.delete );

// VIEWS
Route.get( "/",  View.page( "home" ) );

Route.get( "/login",  View.page( "login" ) );

Route.get( "/register", View.page( "register" ) );

module.exports = Route;