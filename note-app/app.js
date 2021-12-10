const book = {
    'title': 'madolduwa',
    'auther': 'martine wikramasinha'
}

//js object convert to the json its json formatted single string
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

//json parse to js object
const jsObject = JSON.parse(bookJSON)
console.log(jsObject.title)




