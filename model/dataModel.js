const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
   
  device :{
      type : mongoose.Schema.Types.ObjectId,
      ref : "Device"
  }, 
  temperature : {
      type : String,
      required : true
   },
   humidity :{
     type : String,
     required : true
   }
})

module.exports = mongoose.model("Data",dataSchema)