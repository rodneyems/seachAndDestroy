const listOfChange = require('./listOfchanges.js')
const fs = require('fs')
const path = require('path')
const { zip } = require('zip-a-folder');
const fsExtra = require('fs-extra')

let numberOfLine = 0
let numberOfChanges = 0
let numberOfGlobal = 0

class ZipAFolder {
    static async main() {
        await zip(path.join(__dirname,'..','temp','files'), path.join(__dirname,'..','temp','MOD_files.zip'));
    }
}

function searchAndReplace(spreedSheet, filesNames){
    console.log(filesNames)
    return new Promise((resolve)=>{
        filesNames.forEach((file) => {
            // fs.readFileSync()
    
            // fs.readFile()
            let data = fs.readFileSync(path.join(__dirname,'..','uploads','filesToMod',file),{encoding: 'utf-16le'})  
                
                console.log('teste')
                listOfChange(spreedSheet).then(values=>{
                    // fs.appendFileSync(path.join(__dirname,'..','temp','files','log.txt'),`NOME DO ARQUIVO ${file}` + "\n")
                    numberOfLine = 0
                    numberOfChanges = 0

                    const oldValue = values[0]
                    const newValue = values[1]
                    const originalData = data.split(/\r?\n/)
                    for (row of originalData){
                        numberOfLine++
                        for (let i = 0;i < oldValue.length; i++){
                            if (row.includes(oldValue[i])){
                                numberOfChanges++
                                var re = new RegExp(oldValue[i],'g')
                                row = row.replace(re, newValue[i])
                                fs.appendFileSync(path.join(__dirname,'..','temp','files','log.txt'),`MUDANÇA DE NUMERO ${numberOfChanges} NOME DO ARQUIVO ${file} NA LINHA DE NUMERO ${numberOfLine}` + "\n")
                                break
                            }
                        }
                        fs.appendFileSync(path.join(__dirname,'..','temp','files','MOD_'+file),row + "\n",{encoding: 'utf-16le'})
                    }
                    numberOfGlobal++
                    if (numberOfGlobal == filesNames.length){                        
                        ZipAFolder.main().then(()=>{
                            console.log('fim')
                            numberOfGlobal = 0
                            resolve() 
                        })
                    }
                    })
            })               
    })
}

module.exports = searchAndReplace
