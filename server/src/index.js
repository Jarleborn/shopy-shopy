import {connectToDB} from './modules/dbconnecter'
import {getPages} from './modules/getters'
import {savePage} from './modules/saver'


const express = require('express')
const app = express()
const http = require('http').Server(app)
const port = '1337'

let db = ''

connectToDB().then(function (res) {
  db = res.db
})

app.use(express.static(__dirname + '/public'))
app.all('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.get('/getPages', function (req, res) {
  getPages().then(function (res) {
    console.log(res)
  })
})

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port)
})
