const express=require('express')
const fs=require('fs')

const router=express.Router()

router.get('/',(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err)
            data='No chat'
        }
        res.send(`${data}<html><body>
        <h5>No chat</h5>
        <form action="/" onSubmit="document.getElementById("username").value=localStorage.getItem('username')" method="POST">
        <input placeholder="enter chat" name="message" type="text" />
        <input placeholder="enter chat" name="username" id="username" type="hidden" />
        <button type="submit">send</button></form></body></html>`)
    })
  
})

router.post('/',(req,res,next)=>{
    console.log(req.body)
    console.log(req.body.username)

    fs.writeFile('username.txt',`${req.body.username}: ${req.body.message}`,{flag:'a'},(err)=>{
        err?console.log(err):res.redirect('/')
    })

})

module.exports=router