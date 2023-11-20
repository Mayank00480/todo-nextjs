// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
export default async function handler(req, res) {
   
const data = req.body;
const client = await MongoClient.connect('mongodb+srv://mayanksharma:Mayank1029@cluster0.ymj7rwo.mongodb.net/')
const db = client.db();
const collection = db.collection('Items');
const insertedItem = await collection.insertOne(data);


res.json(insertedItem)

}
