const express = require('express')

const bodyParse = require('body-parser')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public/')))

app.get('/ping', function (req, res) {
    return res.send('pong')
   })

app.get('/bundle.js', function (req, res) {
	res.sendFile(path.join(__dirname,'/bundle.js'))
})
   
app.get('/cheeseSample', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/', 'index.html'))
})

app.listen(process.env.PORT || 8000)
