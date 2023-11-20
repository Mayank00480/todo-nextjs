import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MongoClient } from 'mongodb'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const todos = [{
  description : 'This is my First Item'
},{
  description : 'This is my Second Item'
}]
export default function Home(props) {
  async function deleteTodoHandler(todoId) {
    try {
      const response = await fetch(`/api/delete/${todoId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Todo deleted successfully");
      } else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  }
  return (
    <>
    <nav style = {{width : '100vw',backgroundColor:'black',margin:'0px', height : '100px'}}>
      <Link style = {{textDecoration : 'none',color : 'white'}} href = "/addItem"> Add Item </Link>
    </nav>
      {props.items.map(item => {
        return <><p key = {Math.random().toString()}>{item.description}</p>&nbsp; &nbsp;<button onClick = {deleteTodoHandler} type = "button">Delete</button></>
      })}
    </>
  )
}

export  async function getStaticProps(){
  const client =await MongoClient.connect('mongodb+srv://mayanksharma:Mayank1029@cluster0.ymj7rwo.mongodb.net/')
  const db  = client.db()
  const collection = db.collection('Items')
  const data = await collection.find().toArray()
return {
  props : {
    items : data.map(item => {
      return {
        description : item.description,
        id : item._id.toString()
      }
    } )
  }
}
}