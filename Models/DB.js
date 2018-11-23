/**
 * Usage of modeule
 * 
 * DB constructor can take user parameters but is optinal
 * 
 * +---------------------------------------
 * |  Defaults:                           
 * |           DATA_BASE_HOST: 127.0.0.1  
 * |           DATA_BASE_NAME: crud
 * |           DATA_BASE_PORT: 27017
 * +---------------------------------------
 * 
 * Example
 * var DB = new DB({
 *          host: "127.0.0.1",
 *          dbName: "test",
 *          port: "27017",
 * });
 * 
 * DB take params from config file in root folder
 * var DB = new DB();
 * 
 * Constructor make DB connection
 * 
 * Usage - Insert
 * DB.insert( collection[string], objToInsert[obj], callback[function] );
 * 
 * Usage - Select All
 * DB.getAllCollection( collection[string], callback[function] );
 * 
 * Usage - Select by Query
 * DB.getWhere( collection[string], whereObj[obj], callback[function] );
 * 
 * Usage - Update
 * DB.update( collection[string], myQuery[obj], newValues[obj], callback[function] );
 * 
 * Usage - Delete
 * DB.deleteOneWhere( collection[string], myQuery[obj], callback[function] );
 * 
 * 
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
            this.db = client.db( config.dbase || dbName || "crud");
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