import { MongoClient } from "mongodb";
 function getData(req ,res){
  const client = MongoClient.connect('mongodb+srv://mayanksharma:Mayank1029@cluster0.ymj7rwo.mongodb.net/')
  const db  = client.db()
  const collection = db.collection('Items')
  const data = collection.find({}).toArray()
  res.json({items : data})
 }
 export default getData;
