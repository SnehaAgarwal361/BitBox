var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
      food:[{
        Organisation:{
        type: String,
        maxlength: 32,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    amount:{
        type: String
    },
    time:{
        type:String,
        default: 0
    },
    
  }]});


  module.exports=mongoose.model("Food",userSchema);