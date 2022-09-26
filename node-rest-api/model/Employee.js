const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Employee = new Schema({
    id:{
        type: String
    },
  name: {
    type: String
  },
  surname: {
    type: String
  },
  age: {
    type: Number
  } ,
  nationality: {
    type: String
  },
  address: {
    type: String
  }
}, {
  collection: 'employees'
})
module.exports = mongoose.model('Employee', Employee)