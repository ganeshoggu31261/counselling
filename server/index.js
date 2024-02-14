const express = require('express')
const cors    = require('cors');
const {MongoClient}= require('mongodb')

const app=express()

app.use(cors())
app.use(express.json())
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.ktnqstp.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling')
const col = db.collection('register')
// col.insertOne({'student':"31261"})   

app.post('/register',(req,res)=>{
    console.log(req.body)
    col.insertOne(req.body)
    res.send('Inserted successfully')

})

app.get('/retrive', async (req,res)=>{
    const result= await col.find().toArray()
    console.log(result)
    res.send(result)
})
app.get('/',(req,res)=>{ 
    res.send("Hello World")

})
app.get('/about',(req,res)=>{
    res.send("<h1>This is about page</h1>")

})

app.listen('8080',()=>{
    console.log('Server is running')})