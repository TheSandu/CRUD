const DB = require( "../Models/Users" );

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
    DB.insert( collection, objToInsert, ( err, docs )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        res.send( docs );
    });
}

exports.update = ( req, res ) => {
    
    let myquery = { name: req.body.name, };
    let newValues = { $set: {lat: req.body.lat, lon: req.body.lon } };

    DB.update( this.collection, myQuery, newValues, ( err, docs )  => {
        if( err ){ console.log(err); return res.sendStatus(500); }
        res.send( docs );
    });
}

exports.delete = ( req, res ) => {

}