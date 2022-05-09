
// const express = require("express");

const app = require("./server/server");

// const path = require("path");

// "scripts": {
//     "server": "nodemon",
//     "client": "npm start --prefix client",
//     "dev": "concurrently \"npm run server\" \"npm run client\""
//   },

// "heroku-postbuild" : "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client",

// git rm --cached client -f 

// npm install concurrently

// Concurrently help us to start both Frontend and Backend Server together

// npm run dev

// In package-json of client put "proxy" : "http://localhost:5000"

const Connectdb = require("./src/configs/db");

require("dotenv").config();

// if(process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "/client/build")))

//     app.get("*", (req,res) => {
//         res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//     })
// }
// else {
//     app.get("/", (req,res) => {
//         res.send("Api running")
//     })
// }

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    try {
        Connectdb();
        console.log("listening on port 5000");
    }
    catch(error) {
        console.log("error :", error);
    }
});