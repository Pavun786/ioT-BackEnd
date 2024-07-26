const mongoose = require("mongoose")

const deviceSchema = new mongoose.Schema({
    
   deviceName : {
      type : String,
      required : true
   },
   description :{
     type : String,
     required : true
   },
   createdBy:{
      type : mongoose.Schema.Types.ObjectId,
      
      ref : "User"
   }
})

module.exports = mongoose.model("Device",deviceSchema)