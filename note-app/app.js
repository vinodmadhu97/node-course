const addNum = require('./utils.js')
const notes = require("./notes.js")
const validator = require('validator')
const yargs = require('yargs')
const { command, describe } = require('yargs')


const arg1 = process.argv
const arg2 = yargs.argv
console.log(arg1)
console.log(arg2)

yargs.version("1.1.0")
yargs.command({
    command: "add",
    describe : "adding new note",
    handler : function(){
        console.log("new file is added")
    }
})



