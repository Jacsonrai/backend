const express=require('express')
const cors = require('cors')
const bodyParse=require('body-parser')
const app=express()
const db=require('./models')
const category = require('./models/category')


const port=process.env.PORT||5000

var corsOptions = {
    origin: 'http://localhost:5000',

  }
app.use(cors(corsOptions))
app.use(bodyParse.json())


//route for users
  app.get('/api/user', (req, res) => {
    return db.users.findAll()
      .then((user) => res.send(user))
      .catch((err) => {
        console.log('There was an error querying user', JSON.stringify(err))
        return res.send(err)
      });
  });

  app.post('/api/user', (req, res) => {
    const { firstName,phone,age,email,gender,startDate,endingDate,allergies,medicalDiagnosis,description,prescription } = req.body
    return db.users.create({ firstName,phone,age,email,gender,startDate,endingDate,allergies,medicalDiagnosis,description,prescription})
      .then((user) => res.send(user))
      .catch((err) => {
        console.log('***There was an error creating a User', JSON.stringify(err))
        return res.status(400).send(err)
      })
  });
  app.get('/api/user/:id',(req,res)=>{
    let id=req.params.id  
    return db.users.findOne({where:{id:id}}).then((data)=>res.send(data))
    .catch((err)=>{
        console.log('There was an error querying Categories', JSON.stringify(err))
        return res.send(err)
    })
  })

  //router for category
  app.get('/api/treatment', (req, res) => {
    return db.Category.findAll()
      .then((category) => res.send(category))
      .catch((err) => {
        console.log('There was an error querying Categories', JSON.stringify(err))
        return res.send(err)
      });
  });
  app.get('/api/treatment/:id',(req,res)=>{
    let id=req.params.id  
    return db.Category.findOne({where:{id:id}}).then((data)=>res.send(data))
    .catch((err)=>{
        console.log('There was an error querying Categories', JSON.stringify(err))
        return res.send(err)
    })
  })



app.listen(port,()=>{
    console.log('server is running')
})