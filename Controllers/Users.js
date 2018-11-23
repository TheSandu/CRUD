const DB = require( "../Models/DB" );

exports.collection = "users";

exports.getAll = ( req, res ) => {

    DB.getAllCollection( this.collection, ( err, docs )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        res.send( docs );
    });

}

exports.getAllByQuery = ( req, res ) => {

    DB.getWhere( this.collection, req.body, ( err, docs )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        res.send( docs );
    });
}

exports.insert = ( req, res ) => {
    let cryptedPassObj = {
        userName: req.body.userName ,
        password: md5( req.body.password ) ,
        fullName: req.body.fullName ,
        aboute: req.body.aboute
    };

    DB.insert( this.collection, cryptedPassObj, ( err, docs )  => {
        if( err )
        {
            console.log(err); 
            return res.sendStatus(500);
        } else
            res.render( "success.view.ejs" );
    });
}

exports.update = ( req, res ) => {

    let myQuery = { _id: new DB.objId( req.params.id) };

    let setValues = {};

    if ( req.body.userName )
        setValues.userName = req.body.userName;
    
    if ( req.body.fullName )
        setValues.fullName = req.body.fullName;

    if ( req.body.aboute )
        setValues.aboute = req.body.aboute;

    let newValues = { $set: setValues};

    console.log( setValues );

    DB.update( this.collection, myQuery, newValues, ( err )  => {

        if( err )
        { 
            console.log(err); 
            return res.sendStatus(500); 
        } else
            res.render( "success.view.ejs" );
    });
}

exports.delete = ( req, res ) => {
    DB.deleteOneWhere( this.collection, { _id: new DB.objId( req.params.id) }, ( err )  => {

        if( err )
        {
            console.log(err); 
            return res.sendStatus(500);
        } else
            res.render( "success.view.ejs" );
    });
}

exports.find = ( req, res ) => { 

    likeFullName = { fullName: { $regex: req.body.fullName, $options: 'i' } };

    DB.getWhere( this.collection, likeFullName, ( err, docs )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        console.log( docs, req.body.fullName );
        res.render( "users.view.ejs", { users: docs } );
    });
}