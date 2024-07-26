const dataModel = require("../model/dataModel")


const createData = async(req,res)=>{

    try{

     const {temperature,humidity,id} = req.body;
    //  const {id} = req.params;
     
     const createOne = new dataModel({
         
      temperature : temperature,
      humidity : humidity,
      device : id      
     })
       
      await createOne.save();

      res.status(200).send({message : "data created..!"})
    
    } catch(err){

         res.status(500).send({message : err.message})
      }    
}

const getAllDataByDevice = async(req,res)=>{

   try{
    const {id} = req.params;
    const allDatas = await dataModel.find({device: id }).populate({
       path : "device",
       select : "deviceName" 
    })
    
    if(allDatas){
        res.status(200).send(allDatas)
    }else{
        res.send({message : "No device found"})
    }
   }catch(err){

      res.status(500).send({message : err.message})   
    
    }
    
}

const findSingleData = async(req,res)=>{

    try{
    
    const {id} = req.params;
    
    const getSingle = await dataModel.findById(id) 

    if(getSingle){
        res.status(200).send(getSingle)
    }else{
        res.send({message : "There is No Data"})
    }
    }catch(err){
        res.status(500).send({message : err.message})
    }
}


const editData = async(req,res)=>{

    try{
        const {id} = req.params;
        const data = req.body;
     
        const updateData = await dataModel.findByIdAndUpdate( id,data,{ new: true })
        res.status(200).send({message : "Data Updated",updateData})
    }catch(err){
        res.status(500).send({message: err.message})
    }
}

const deleteData = async(req,res)=>{

    try{
        const {id} = req.params;
       
        const removeData = await dataModel.findByIdAndDelete(id)

        if(!removeData){
            res.status(200).send({message : "There is no data found"})
        }else{
            res.status(200).send({message : "Data deleted",removeData})
        }
        
    }catch(err){
        res.status(500).send({message: err.message})
    }


}

module.exports = {createData,getAllDataByDevice,editData,deleteData,findSingleData};