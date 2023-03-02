const express=require('express')

const router=express.Router()

router.get('/login',(req,res,next)=>{
   res.send('<form action="/" method="POST"><input placeholder="username" name="username" type="text" /><button type="submit">login</button></form>')
   res.redirect('/')
})

module.exports=router