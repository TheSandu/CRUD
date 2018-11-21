const DB = require( "../Models/Users" );

// let dBase = new DB();

exports.collection = "users";

exports.errorCheck = ( err, docs )  => {
    if( err ){ console.log(err); return res.sendStatus(500); }
    res.send( docs );
}

exports.getAll = ( req, res ) => {
    DB.getAllCollection( this.collection, this.errorCheck );

}
exports.getAllByQuery = ( req, res ) => {
    DB.getWhere( this.collection, req.body, this.errorCheck );
}
exports.inser = ( req, res ) => {
    DB.insert( collection, objToInsert, this.errorCheck );
}
exports.update = ( req, res ) => {
    
    let myquery = { name: req.body.name, };
    let newValues = { $set: {lat: req.body.lat, lon: req.body.lon } };

    DB.update( this.collection, myQuery, newValues, this.errorCheck );
}
exports.delete = ( req, res ) => {
    
}