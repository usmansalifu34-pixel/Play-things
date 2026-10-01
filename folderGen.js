const fs = require('fs')
const folderNames = ["controllers","routes","middleware","errors","models","database"]
const cp = require('child_process')
cp.execSync('npm init -y')
cp.execSync('git init')
cp.execSync('npm i express')
cp.execSync('npm i mongoose')
cp.execSync('npm i http-status-codes')
cp.execSync('npm i jsonwebtoken')
cp.execSync('npm i dotenv')
for(let folder of folderNames){
    fs.mkdirSync(`${process.cwd()}/${folder}`)
    //fs.writeFileSync(`${folder}/${folder}.js`,"yoooo")
    switch(folder){
        case "controllers":
            fs.writeFileSync(`${folder}/${folder}.js`,"const models = require('../models/model')")
            break;
        case "routes":
            fs.writeFileSync(`${folder}/${folder}.js`,"const express = require('express')\nconst router = express.Router()")
            break;
        case "middleware":
            fs.writeFileSync(`${folder}/authMid.js`,"//write code here")
            fs.writeFileSync(`${folder}/errorHandlerMid.js`,"const {StatusCodes} = require('http-status-codes')")
            fs.writeFileSync(`${folder}/authMid.js`,"//write code here")
            fs.writeFileSync(`${folder}/notFoundMid.js`,"const notFound = (req,res)=>{res.send('Route doesn't exist')}\nmodule.exports = notFound")
            break;
        case "errors":
            fs.writeFileSync(`${folder}/authError.js`,"//write code here")
            fs.writeFileSync(`${folder}/badRequestError.js`,"//write code here")
            fs.writeFileSync(`${folder}/createCustomError.js`,"//write code here")
            fs.writeFileSync(`${folder}/index.js`,"//write code here")
            fs.writeFileSync(`${folder}/notFound.js`,"//write code here")
            break;
        case "models":
            fs.writeFileSync(`${folder}/userModel.js`,"//write code here")
            fs.writeFileSync(`${folder}/otherModel.js`,"//write code here")
            break;
        case "database":
            fs.writeFileSync(`${folder}/connectDB.js`,"const mongoose = require('mongoose')\nconst connectDB = async(url)=>{return await mongoose.connect(url)}\nmodule.exports = connectDB")
            break;
    }
}
fs.writeFileSync(`${process.cwd()}/app.js`,"const express = require('express')\nconst app = express()")
fs.writeFileSync(`${process.cwd()}/.env`,"Environment Variables Here")
fs.writeFileSync(`${process.cwd()}/.gitignore`,".env\n/node_modules")
console.log(process.cwd())