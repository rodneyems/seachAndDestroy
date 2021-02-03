const listOfChange = require('./listOfchanges.js')
const fs = require('fs')
const path = require('path')

function searchAndReplace(fileName){
    fs.readFile(path.join(__dirname,fileName),{encoding:'utf16le'},(err, data)=>{        
        listOfChange('Dynam.xlsx').then(values=>{
            const oldValue = values[0]
            const newValue = values[1]
            console.log(oldValue)
            const originalData = data.split(/\r?\n/)

            for (row of originalData){
                for (let i = 0;i < oldValue.length; i++){
                    if (row.includes(oldValue[i])){
                        console.log("TOCOU")
                        console.log(row)
                        line = row.replace(oldValue[i], newValue[i])
                        console.log(line)
                    }else{
                        line = row.replace(oldValue[i], newValue[i])
                    }
                }
                fs.appendFileSync(path.join(__dirname,'MOD_teste.keysets'),line + "\n")
            }
        })
    })
}

searchAndReplace()
