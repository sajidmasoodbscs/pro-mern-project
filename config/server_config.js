
require("dotenv").config();
module.exports={
    ServerConfiguration:{
        HOST:process.env.APPLICATION_SERVER_HOST,
        PORT:process.env.APPLICATION_SERVER_PORT
    },
};