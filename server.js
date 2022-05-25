const express=require("express");
const Setting=require("./config/server_config")
const app=express();
app.use(express.static('static'));
app.listen(Setting.ServerConfiguration.PORT,function(){
    console.log(`Running at http://${Setting.ServerConfiguration.HOST}:${Setting.ServerConfiguration.PORT}`);
})