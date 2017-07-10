// const mongoose = require('mongoose')
// import {pass} from '../../../secrets/auth'
const pageModel = require('../models/pages')

function savePage(page) {
  return new Promise(function(resolve, reject) {
    let newPage = new pageModel(page)
    newPage.save(function(err){
      if (err) {
        console.log(err)
        reject(err)
      }
      resolve('saved')
    })
  })
}





export {savePage}
