const deviceModel = require("../model/deviceModel")


const createdevice = async(req,res)=>{

    try{

     const {deviceName,description,userId} = req.body;

      console.log("user",userId)
      const verifydevice = await deviceModel.findOne({deviceName})

      if(verifydevice){

         res.send({message : "device already exists"})
      }else{
       
       
        const createOne = new deviceModel({
         
            deviceName : deviceName,
            description : description,
            createdBy : userId
         })
       
          await createOne.save();
          console.log(createOne.createdBy)
          res.status(200).send({message : "device created..!"})
     }


      } catch(err){

         res.status(500).send({message : err.message})
      }    
}

const getAllDevicesById = async(req,res)=>{

   try{
    const {userId} = req.params;
    const allItems = await deviceModel.find({createdBy : userId})
    
    if(allItems){
        res.status(200).send(allItems)
    }else{
        res.send({message : "No device found"})
    }
   }catch(err){

      res.status(500).send({message : err.message})   
    
    }
    
}

const getAllDevices = async(req,res)=>{

    try{
    
     const allItems = await deviceModel.find({}).populate({
        path :"createdBy",
        select : "userName"
     })
     
     if(allItems){
         res.status(200).send(allItems)
     }else{
         res.send({message : "No device found"})
     }
    }catch(err){
 
       res.status(500).send({message : err.message})   
     
     }
     
 }

const findSingleDevice = async(req,res)=>{

    try{
    
    const {id} = req.params;
    
    const getSingle = await deviceModel.findById(id) 

    if(getSingle){
        res.status(200).send(getSingle)
    }else{
        res.send({message : "There is No device"})
    }
    }catch(err){
        res.status(500).send({message : err.message})
    }
}


const editDevice = async(req,res)=>{

    try{
        const {id} = req.params;
        const data = req.body;
     
        const updateItem = await deviceModel.findByIdAndUpdate(id,data,{ new: true })
        res.status(200).send({message : "Device Updated",updateItem})
    }catch(err){
        res.status(500).send({message: err.message})
    }
}

const deleteDevice = async(req,res)=>{

    try{
        const {id} = req.params;
       
        const removeItem = await deviceModel.findByIdAndDelete(id)

        if(!removeItem){
            res.status(200).send({message : "There is no device found"})
        }else{
            res.status(200).send({message : "Device deleted",removeItem})
        }
        
    }catch(err){
        res.status(500).send({message: err.message})
    }


}

module.exports = {createdevice,getAllDevicesById,getAllDevices,findSingleDevice,editDevice,deleteDevice};