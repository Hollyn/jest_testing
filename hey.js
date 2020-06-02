const functions = require('./functions')

functions.fetchUser().then(data => {
    console.log(data.name == "Leanne Graham")
}).catch(err => {
    console.log("Error : " + err)
})