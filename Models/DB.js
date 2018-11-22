/**
 * Usage of modeule
 * 
 * var DB = new DB({
 *          host: "127.0.0.1",
 *          dbName: "test",
 *          port: "27017",
 *          onDBLoad: function(){}
 * });
 */

const config = require("../config.json");

const ObjectId  = require( "mongodb" ).ObjectID;

const MongoClient = require( "mongodb" ).MongoClient; 

class DB
{
    constructor( host, port, dbName )
    {

        this.host = config.mongodbIP || host || "127.0.0.1";
        this.port = config.mongodbPort || port || "27017";

        MongoClient.connect( `mongodb://${this.host}:${this.port}`, ( err, client) =>
        {
            if(err)
                throw new Error( err );
            else
                console.log( `DB is connected...HOST:${this.host}, PORT:${this.port}` );

            this.objId = ObjectId;
            this.db = client.db( config.dbase || dbName );
        });
    }

    insert( collection, objToInsert, callback )
    {
        this.db.collection( collection ).insert( objToInsert, callback );
    }

    getWhere( collection, whereObj, callback )
    {
        this.db.collection( collection ).find( whereObj ).toArray( callback );
    }

    update( collection, myQuery, newValues, callback )
    {
        this.db.collection( collection ).updateOne(myQuery, newValues, callback);
    }
    getAllCollection( collection, callback )
    {
        this.db.collection( collection ).find().toArray( callback );
    }

    deleteOneWhere( collection, myQuery, callback )
    {
        this.db.collection( collection ).deleteOne( myQuery, callback );
    }
}

module.exports = new DB();