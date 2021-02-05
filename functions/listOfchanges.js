const path = require('path')
const sSheet = require('read-excel-file/node')

function listOfChange(nameOfSpreedSheet){
    let oldValue = []
    let newValue = []
    return sSheet(path.join(__dirname,'..','uploads','spreedSheet',nameOfSpreedSheet)).then(rows => {
        rows.forEach(element => {
            oldValue.push(element[0])
            newValue.push(element[1])
        });
        oldValue.shift()
        newValue.shift()
        return [oldValue, newValue]
    })
}

module.exports = listOfChange