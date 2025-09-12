import express from 'express'

const app=express()
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.send("hi")
})


app.listen(8000,()=>{
    console.log("Connected")
})


/*
create a REST API,where create two middleware (custom)
in the first middleware create a variable for request object as "uname=Admin"
in second middleware, check wether the uname is admin or not, if admin just go to the
other endpoints like/otherwise close or return
*/