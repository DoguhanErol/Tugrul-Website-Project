//Import|Require
const express = require('express')
const fs = require('fs')
const cors =require('cors')
require('dotenv').config()
const port = process.env.PORT;

//App
const app = express()

//MiddleWare
app.use(cors())
app.use(express.static('public'))

//Get
app.get('/api/galeri', (req, res) => {//Api endpoint linkidir
    const folderPath = './public/galeri'//Dosya yolu degismedikce buna dokunma
    let filePaths = []
  
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ error: 'Internal server error' })
      }
  
      files.forEach(file => {
        const filePath = `\\galeri\\${file}`//Dosya yolu degismedikce buna dokunma
        console.log(filePath)
        filePaths.push(filePath)
      });
  
      console.log(filePaths);
      res.status(200).json(filePaths);
    });
  });

//Port Listen
app.listen(process.env.PORT,()=>{
    console.log('Server Is Listining On Port ' + port)//8393 PORT
})

