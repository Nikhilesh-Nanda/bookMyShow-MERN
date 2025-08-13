const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'BOOKMYSHOW';

const dbConnection = async () =>{
    try{
        await client.connect();
        console.log("connected succesfully to the server")
        const db = client.db(dbName);
        return db;
    }
    catch(error){
        console.log("Failed to connect to the database");
        throw error;
    }
}
module.exports = {dbConnection};
