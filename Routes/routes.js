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
Route.get( "/",  Views.homePage );

Route.get( "/login",  Views.loginPage );

Route.get( "/register", Views.registerPage );

Route.get( "/users", Views.usersPage );


module.exports = Route;