var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  title: {
    type: String,
    required: false,
    unique: true,
},
  desc: {
    type: String
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  updated_at: {
    type: Date,
    default: null
  },
  deleted_at: {
    type: Date,
    default: null
  },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }]

});

module.exports = mongoose.model('Category', CategorySchema);



