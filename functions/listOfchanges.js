const sSheet = require('read-excel-file/node')

function listOfChange(nameOfSpreedSheet){
    let oldValue = []
    let newValue = []
    return sSheet(nameOfSpreedSheet).then(rows => {
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