import express from "express"; 

const app = express();

// API
app.get( "/api/users/all", Users.getAll);

app.get( "/api/all/where/:collection", Users.getAllByQuery);

app.post( "" )
// VIEWS
app.get( "/",  function( req, res ){ View.page("home").with( req, res ); });

app.listen( 3000, Env.onServerStart );