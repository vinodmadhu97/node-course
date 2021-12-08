const addNum = require('./utils.js')
const notes = require("./notes.js")
const validator = require('validator')


const result1 = validator.isEmail("vinod@gmail.com")
const result2 = validator.isURL("https//abc.com")
console.log(result1)
console.log(result2)

const sum = addNum(2, 4)
const myNote = notes()
console.log(sum)
console.log(myNote)


