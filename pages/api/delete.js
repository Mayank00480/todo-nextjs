import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const { todoId } = req.query;

    const client = await MongoClient.connect(
      "mongodb+srv://mayanksharma:Mayank1029@cluster0.ymj7rwo.mongodb.net/"
    );

    const db = client.db();

    const todoCollection = db.collection("Items");

    const result = (
      await todoCollection.deleteOne({
        _id: new ObjectId(todoId),
      })
    ).deletedCount;

    console.log(result);

    client.close();

    return res.status(200).json({ message: "Todo deleted!" });
  }
}

export default handler