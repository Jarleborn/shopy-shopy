// const mongoose = require('mongoose')
// import {pass} from '../../../secrets/auth'
const pageModel = require('../models/pages')

function getPages(db) {
  return new Promise(function(resolve, reject) {
    pageModel.find(function(err, pagesFound){
      if (err) {
        console.log(err)
        reject(err)
      } else if(pagesFound.length === 0){
        resolve('No pages found')
      } else if (pagesFound) {
        console.log('found: ' + pagesFound.length + 'pages')
        resolve(pagesFound)
        return pagesFound
      }
    })

  })

}





export {getPages}
