const express = require('express')
const cors = require('cors')

const bodyParser = require('body-parser')
const app = express()

const fs = require('fs')



//Autoriser les requetes quelque soit l'origin
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

//analyser et parser le body request
app.use(bodyParser.json())

app.post('/Form', (req, res) => {
    console.log(req.body)
    const contenuFichierProgrammes = fs.readFileSync('programmes.json')
    //JSON.parse => convertir une chaine de caractère en objet json quand c'est possible
    const programmes = JSON.parse(contenuFichierProgrammes)
    programmes.push(req.body)
    //On ecrit des chaines de caractères dans notre fichier annonces.json => JSON.stringify pôur convertir un objet en chaine de caractère
    fs.writeFileSync('programmes.json', JSON.stringify(programmes))
    res.json({msg : 'programme ajoutée'})
})

app.get('/programmes', (req, res) => {
    const contenuFichierProgrammes = fs.readFileSync('programmes.json')
    const programmes = JSON.parse(contenuFichierProgrammes)
    res.json(programmes)
})

app.listen(80,function(){
    console.log("une nouvelle connexion")
})