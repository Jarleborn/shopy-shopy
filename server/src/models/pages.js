const mongoose = require('mongoose')
const pageS = mongoose.Schema({
  name: String,
  text: String,
})

const Page = mongoose.model('page', pageS)

module.exports = Page
