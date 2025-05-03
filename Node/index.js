import express from "express"
import cors from "cors"
const app = express();


app.use(express.json())

app.get("/api/jokes" , (req , res)=>{
    const data = {message : "Hello" , name : "Hitesh" , age : 69}
   
    
    res.json(data)
})

app.listen(5000 , ()=>{
    console.log("App is listening at port 5000")
})