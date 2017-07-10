const mongoose = require('mongoose')
import {pass} from '../../../secrets/auth'

function connectToDB() {
  return new Promise(function(resolve, reject) {
    let promise = mongoose.connect('mongodb://root:'+pass+'@ds123662.mlab.com:23662/nassel', {
      useMongoClient: true,
    })
    promise.then(function(db) {
      resolve(db)
    })
    promise.catch(function (err) {
      reject(err)
    })
  })

}





export {connectToDB}
