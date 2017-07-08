const mongoose = require('mongoose')
import {pass} from '../../../secrets/auth'

function connectToDB() {
  return new Promise(function(resolve, reject) {
    mongoose.connect('mongodb://root:'+pass+'@ds123662.mlab.com:23662/nassel')
    let db = mongoose.connection
    db.on('error', reject('error'))
    db.once('open', function() {
      console.log('connected')
      resolve('connected')
    })
  })
}

export {connectToDB}
