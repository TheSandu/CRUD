/**
 * Route module is instance of express module
 * 
 * Usage
 * 
 * Route.{method}( route[string], callback[function] );
 * 
 * methods: get, post, put, delete
 * 
 * Ins this module write onli routes
 * but can make over express utilities
 */


const express = require( "express" );
const Users = require( "../Controllers/Users" );
const Views = require( "../Controllers/View" );
const bodyParser = require( "body-parser" );
const session = require("express-session");

const Route = express();

Route.use( bodyParser.json() );
Route.use( bodyParser.urlencoded( { extended: true } ) );
Route.use( session({ secret: "sandu9111", resave: false, saveUninitialized: true }) );

// API
Route.get( "/api/all/users", Users.getAll);

Route.get( "/api/all/users/where", Users.getAllByQuery);

Route.post( "/api/insert", Users.insert );

Route.post( "/api/update", Users.update );

Route.post( "/api/delete", Users.delete );

// VIEWS

Route.get( "/thisUser", Views.thisUserPage );

Route.get( "/login",  Views.loginPage );

Route.get( "/user/:id", Views.userPage );

Route.get( "/users", Views.usersPage );

Route.get( "/find", Views.findPage );

Route.post( "/",  Views.homePage );

Route.post( "/find", Users.find );

Route.get( "/insertUser", Views.insertUserPage );

Route.post( "/insert/", Users.insert );

Route.get( "/updateUser/:id", Views.updateUserPage );

Route.post( "/update/:id", Users.update );

Route.post( "/delete/:id", Users.delete );

module.exports = Route;