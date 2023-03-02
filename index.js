const express=require('express')
const bodyParser=require('body-parser')

const app=express()
const loginRoute=require('./routes/login')
const homeRoute=require('./routes/home')

app.use(bodyParser.urlencoded({extended:false}))
app.use(loginRoute)
app.use(homeRoute)

app.use((req,res,next)=>{
  res.status(404).send('<h1>Page not found</h1>')
})

app.listen(4000)