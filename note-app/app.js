const addNum = require('./utils.js')
const notes = require("./notes.js")
const validator = require('validator')


const arg1 = process.argv
const arg2 = process.argv[2]
console.log(arg1)
console.log(arg2)

if(arg2 === "add"){
    console.log("add something")
}else{
    console.log("remove")
}


