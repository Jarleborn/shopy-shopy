import {connectToDB} from './modules/dbconnecter'

connectToDB()
.then(function (res) {
  console.log(res)
})
.catch(function (err) {
  console.log(err)
})
