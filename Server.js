const express = require("express")
const cors=require("cors")

const connection = require("./Config/Connection")
const router = require("./Router/Route")
connection()

const app=express()
app.use(cors())

app.get("/",(req,res)=>{

  res.setHeader("Access-Control-Allow-Credentials","true");
  res.send("API is Running")
});
app.use(express.json())
app.use("/",router)





const port=4000
app.listen(port,console.log(`server is running on port ${port}`))
