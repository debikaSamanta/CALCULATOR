const express = require ("express")
const bodyparser = require("body-parser")
const app = express()

app.use(bodyparser.urlencoded({extended : true}))

app.get('',(req,res)=>{
    res.sendFile("/home/sam/calce/client/public/index.html")
})


app.post('', (req,res)=>{
    const n1 = Number(req.body.number1)
    const n2 = Number(req.body.number2)
    const ans = n1 +n2
    var result = "Your Addition Result(from server) is:" +ans;
    res.send(result)
})


app.listen(5000,()=>{
    console.log("server started at port 5000")
})

//code 