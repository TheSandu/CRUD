const DB = require("../Models/DB");

exports.homePage = ( req, res ) => {
    res.render( "home.view.ejs", { name: "Bacinschii Alexandru" } );    
}

exports.loginPage = ( req, res ) => {
    res.render( "login.view.ejs", { name: "Bacinschii Alexandru" } );
}

exports.registerPage = ( req, res ) => {
    res.render( "register.view.ejs", { name: "Bacinschii Alexandru" } );
}

exports.thisUserPage = ( req, res ) => {
    res.render( "thisUser.view.ejs", { name: "Bacinschii Alexandru" } );    
}

exports.usersPage = ( req, res ) => {
    DB.getAllCollection("users", ( err, docs )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        res.render( "users.view.ejs", { users: docs } );
    });
}

exports.userPage = ( req, res ) => {
    DB.getWhere("users", { _id: new DB.objId(req.params.id) }, ( err, docs )  => {
        console.log( docs  );
        if( err ){ console.log(err); return res.sendStatus(500); }
        res.render( "user.view.ejs", { user: docs[0] } );
    });
}

exports.insertUserPage  = ( req, res ) => {
    res.render( "insertUser.view.ejs" );
}

exports.updateUserPage  = ( req, res ) => {

    var myQuery = { _id: new DB.objId( req.params.id ) };
    var newValues = { $set: req.body  };

    DB.update( "users", myQuery, newValues, ( err )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        else
            res.render( "home.view.ejs" );
    });
    res.render( "updateUser.view.ejs", { name: "Bacinschii Alexandru" } );
}

exports.deleteUserPage  = ( req, res ) => {

    DB.deleteOneWhere("users", { _id: new DB.objId(req.params.id) }, ( err )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        else
            res.render( "deleteUser.view.ejs" );
    });
}