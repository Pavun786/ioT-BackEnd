const express= require("express")
const router = express.Router()
const {createData,getAllDataByDevice,editData,deleteData,findSingleData} = require("../Controller/dataController")
const auth = require("../middleware/authMiddleware")


router.post("/create/",auth,createData)
router.get("/getAll/:id",auth,getAllDataByDevice)
router.get("/:id",auth,findSingleData)
router.put("/:id",auth,editData)
router.delete("/:id",auth,deleteData)

module.exports = router;