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


const MongoClient = require( "mongodb" ).MongoClient; 

class DB
{
    constructor( host, port, dbName )
    {
        if( host == undefined )
        {
            this.host = "127.0.0.1";
        } else
        this.host = host;

        if( port == undefined )
        {
            this.port = "27017";
        } else
            this.port = port;

        MongoClient.connect( `mongodb://${this.host}:${this.port}`, ( err, client) =>
        {
            if(err)
                throw new Error( err );
            else
                console.log( `DB is connected...HOST:${this.host}, PORT:${this.port}` );

            this.db = client.db( dbName );
        });
    }

    insert( collection, objToInsert )
    {
        this.db.collection( collection ).insert( objToInsert, ( err, result ) => {
            if(err)
                console.log(err);
        });
    }

    getWhere( collection, whereObj )
    {
        this.db.collection( collection ).find( whereObj ).toArray( ( err, docs)=>{
            if(err)
                console.log(err);
        });
    }

    updateOne( collection, myQuery, newValues )
    {
        this.db.collection( collection ).updateOne(myQuery, newValues, function(err, docs) {
            if(err)
                console.log(err);
        });
    }
    getAllCollection( collection )
    {
        this.db.collection( collection ).find().toArray( ( err, docs)=>{
            if(err)
                console.log(err);
        });
    }
}

module.exports = DB;