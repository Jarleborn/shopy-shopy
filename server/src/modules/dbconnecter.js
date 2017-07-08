const mongoose = require('mongoose')
import {pass} from '../../../secrets/auth'

function connectToDB() {
  var promise = mongoose.connect('mongodb://root:'+pass+'@ds123662.mlab.com:23662/nassel', {
    useMongoClient: true,
    /* other options */
  })
  promise.then(function(db) {
    console.log(db)
  })
}





export {connectToDB}
