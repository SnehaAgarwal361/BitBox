var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    username:{
        type: String,
        maxlength: 32,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password:{
        type: String
    },
    role:{
        type:Number,
        default: 0
    },
    
        first_name:{
            type:String,
            default: ""
        },
        last_name:{
            type:String,
            default: ""
        },
        
        city:{
            type:String,
            default: ""
        },
        address:{
            type:String,
            default: ""
        },
        telephone:{
            type:String,
            default: ""
        },
        mobile:{
            type:String,
            default: ""
        },
        img: {
            type:String,
            default:""
        }

    
  },{
      timestamps:true
  });


  module.exports=mongoose.model("User",userSchema);