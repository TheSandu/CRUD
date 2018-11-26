const DB = require( "../Models/DB" );
const Validation = require( "../Validation/Validation" );

exports.homePage = ( req, res ) => {
    if ( Validation.islogged( req ) )
        return res.render( "thisUser.view.ejs", { user: req.session.user } );

    console.log( req.body.userName, DB.md5(req.body.password ) );

    DB.getWhere("users", { userName: req.body.userName, password: DB.md5(req.body.password )}, ( err, docs )  => {
        if( docs.length > 0 )
            { req.session.user = docs[0]; res.render( "thisUser.view.ejs", { user: docs[0]} );}
        else if( docs.length <= 0 )
            res.render( "login.view.ejs" );
        else if( err )
            { console.log(err); return res.sendStatus(500); }
        else ; // This case is in progres
    });
}

exports.loginPage = ( req, res ) => {
    res.render( "login.view.ejs" );
}

exports.thisUserPage = ( req, res ) => {
    if ( Validation.isNotlogged( req ) )
        return res.render( "login.view.ejs" );


    res.render( "thisUser.view.ejs", { user: req.session.user } );
}

exports.usersPage = ( req, res ) => {
    if ( Validation.isNotlogged( req ) )
        return res.render( "login.view.ejs" );

    DB.getAllCollection("users", ( err, docs )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        res.render( "users.view.ejs", { users: docs } );
    });
}

exports.userPage = ( req, res ) => {
    if ( Validation.isNotlogged( req ) )
        return res.render( "login.view.ejs" );

    DB.getWhere("users", { _id: new DB.objId(req.params.id) }, ( err, docs )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        res.render( "user.view.ejs", { user: docs[0] } );
    });
}

exports.findPage  = ( req, res ) => {
    if ( Validation.isNotlogged( req ) )
        return res.render( "login.view.ejs" );

    res.render( "find.view.ejs" );
}

exports.insertUserPage  = ( req, res ) => {
    if ( Validation.isNotlogged( req ) )
        return res.render( "login.view.ejs" );
        
    res.render( "insertUser.view.ejs" );
}

exports.updateUserPage  = ( req, res ) => {
    if ( Validation.isNotlogged( req ) )
        return res.render( "login.view.ejs" );
        
    res.render( "updateUser.view.ejs", { user: req.params} );
}