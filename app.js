const express = require("express")

const dotenv = require("dotenv")
dotenv.config()

const dbConnect = require("./db_connect")

const users = require("./users")

const port = process.env.port||5000

const app = express()


app.use(express.urlencoded({extended: false }))

app.get("/",(req,res)=>{
    res.send("hello beautiful")
})

// user login
app.post("/login",async(req,res)=>{
  try{
    const {userName,password,email,name} = req.body
    const result = await users.create({userName,password,email,name})
    if(result)
    return res.send ("hello user welcome... Account created successfully")
  }catch(error){
    console.log(error)
   
  }
})

app.listen(port,(req,res)=>{
    console.log(`server started on http://localhost:${port}`);
    dbConnect.authenticate();
})