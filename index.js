const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer');
const searchAndReplace = require('./functions/search.js')
const fsExtra = require('fs-extra')

let spreedSheet = null
let filesToChange = []


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if(file.originalname.includes('.xlsx')){
            spreedSheet = file.originalname
            cb(null, 'uploads/spreedSheet/')
        }else{
            filesToChange.push(file.originalname)
            cb(null, 'uploads/filesToMod/')
      }
    },
    filename: function (req, file, cb) {
        console.log(file.originalname)
        cb(null, file.originalname)
    }
  })

const upload = multer({
    storage: storage // this saves your file into a directory called "uploads"
});

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req, res)=>{
    res.render('index.html')
})

app.post('/', upload.array('files'), (req, res) => {
    searchAndReplace(spreedSheet,filesToChange).then(()=>{
        fsExtra.emptyDir(path.join(__dirname,'temp','files'))  
        fsExtra.emptyDir(path.join(__dirname,'uploads','filesToMod'))  
        fsExtra.emptyDir(path.join(__dirname,'uploads','spreedSheet'))
        filesToChange = []
        res.download('./temp/MOD_files.zip')
    })
});

app.listen('5000',()=>{
    console.log('Server is running on port 5000')
})