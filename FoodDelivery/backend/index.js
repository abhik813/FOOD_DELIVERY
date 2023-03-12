const express = require("express");
const app = express();
const cors = require('cors');
const main = require("./db");
const { urlencoded } = require("express");


// // config.EnableCors(new EnableCorsAttribute(Properties.Settings.Default.Cors, "", ""))
// app.UseCors(CorsOptions.AllowAll);
app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/api",require("./routes/Createuser"));
app.use("/api",require("./routes/Loginuser"));
app.use("/api",require("./routes/Displaydata"));
app.get("/",function(req,res)
{
    res.send("hi");
})

app.listen(5000,function(req,res)
{
    console.log("Connected and running");
})