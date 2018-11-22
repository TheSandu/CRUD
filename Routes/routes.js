const express = require( "express" );
const Users = require( "../Controllers/Users" );
const Views = require( "../Controllers/View" );

const Route = express();

// API
Route.get( "/api/all/users", Users.getAll);

Route.get( "/api/all/users/where", Users.getAllByQuery);

Route.post( "/api/insert", Users.insert );

Route.post( "/api/update", Users.update );

Route.post( "/api/delete", Users.delete );

// VIEWS
Route.post( "/",  Views.homePage );

Route.get( "/login",  Views.loginPage );

Route.get( "/register", Views.registerPage );

Route.get( "/thisUser", Views.thisUserPage );

Route.get( "/user/:id", Views.userPage );

Route.get( "/users", Views.usersPage );

Route.get( "/insertUser", Views.insertUserPage );

Route.get( "/updateUser/:id", Views.updateUserPage );

Route.get( "/deleteUser/:id", Views.deleteUserPage );

module.exports = Route;