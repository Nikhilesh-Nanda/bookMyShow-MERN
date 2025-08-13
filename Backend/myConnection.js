const express = require('express');
const app = express();
const { dbConnection } = require('./dbConnection');
const PORT = 3001;
const cors = require('cors');
const { ObjectId } = require('mongodb');
app.use(cors());
app.use(express.json());

const allData = [];
let lengthOfData = 0;
 
app.post('/data', async (req, res) => {
   const db = await dbConnection(); 
   const collectionName = 'mine'; 
   const collection = db.collection(collectionName);
  req.body.id = ++lengthOfData;
  allData.push(req.body);
  console.log(req.body);
 res.status(201).send("Data inserted")
});
app.get('/data/sendNow',async(req,res)=>{
  const db = await dbConnection();
  const collectionName = 'mine';
  const collection = db.collection(collectionName);
  if(allData.length == 0) return res.send("No data to be send");
  else{
    for(let i = 0; i<allData.length ; i++) await collection.insertOne(allData[i]);
    res.send({message:"Data send from backend"})
    const result = await collection.find().toArray();
    console.log(result);
  }  
});
app.get('/data/q', async (req, res) => {
  const db = await dbConnection();
  const collection = db.collection('mine');

  const {id} = req.query;
  console.log(req.query);

  const result = await collection.find({_id:id}).toArray();
  
  if(!result) res.status(404).send("No data found");
  else res.send(result);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));