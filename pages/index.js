import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MongoClient } from 'mongodb'

const inter = Inter({ subsets: ['latin'] })
const todos = [{
  description : 'This is my First Item'
},{
  description : 'This is my Second Item'
}]
export default function Home(props) {
  return (
    <>
      {props.items.map(item => {
        return <p key = {Math.random().toString()}>{item.description}</p>
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