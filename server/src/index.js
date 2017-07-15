import {connectToDB} from './modules/dbconnecter'
import {getPages} from './modules/getters'
import {savePage} from './modules/saver'

const cors = require('cors')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const port = '1337'


let db = ''

connectToDB().then(function (res) {
  db = res.db
})

app.use(express.static(__dirname + '/public'))
app.use(cors())
// app.all(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers", "Origin, X-Requested-With,  Accept')
//   next()
// })


app.get('/getPages', function (req, res) {
  getPages()
  .then(response => {
    console.log('resssssss',response)
    res.send(JSON.stringify(response))
  })
})

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port)
})
