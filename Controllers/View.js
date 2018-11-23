const DB = require("../Models/DB");

exports.homePage = ( req, res ) => {
    res.render( "home.view.ejs" );    
}

exports.loginPage = ( req, res ) => {
    res.render( "login.view.ejs" );
}

exports.registerPage = ( req, res ) => {
    res.render( "register.view.ejs" );
}

exports.thisUserPage = ( req, res ) => {
    res.render( "thisUser.view.ejs" );    
}

exports.usersPage = ( req, res ) => {
    DB.getAllCollection("users", ( err, docs )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        res.render( "users.view.ejs", { users: docs } );
    });
}

exports.userPage = ( req, res ) => {
    DB.getWhere("users", { _id: new DB.objId(req.params.id) }, ( err, docs )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        res.render( "user.view.ejs", { user: docs[0] } );
    });
}

exports.findPage  = ( req, res ) => {
    res.render( "find.view.ejs" );
}

exports.insertUserPage  = ( req, res ) => {
    res.render( "insertUser.view.ejs" );
}

exports.updateUserPage  = ( req, res ) => {
    res.render( "updateUser.view.ejs", { user: req.params} );
}