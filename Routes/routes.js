const express = require( "express" );
const Users = require( "../Controllers/Users" );
const Route = express();

const Views = require( "../Controllers/View" );

// API
Route.get( "/api/all/users", Users.getAll);

Route.get( "/api/all/users/where", Users.getAllByQuery);

Route.post( "/api/insert", Users.insertOne );

Route.post( "/api/update", Users.update );

Route.post( "/api/delete", Users.delete );

// VIEWS
Route.get( "/",  Views.page( "home" ).show );

Route.get( "/login",  Views.page( "login" ).show  );

Route.get( "/register", Views.page( "register" ).show );

module.exports = Route;