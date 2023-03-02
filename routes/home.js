const express=require('express')
const router=express.Router()

router.post('/',(req,res,next)=>{
    res.send('<html><body><h5>No chat</h5><form action="/" method="POST"><input placeholder="enter chat" name="chat" type="text" /><button type="submit">send</button></form></body></html>')
})

module.exports=router