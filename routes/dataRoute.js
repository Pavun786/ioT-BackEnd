const express= require("express")
const router = express.Router()
const {createData,getAllDataByDevice,editData,deleteData,findSingleData} = require("../Controller/dataController")
const auth = require("../middleware/authMiddleware")


router.post("/create/",createData)
router.get("/getAll/:id",getAllDataByDevice)
router.get("/:id",findSingleData)
router.put("/:id",editData)
router.delete("/:id",deleteData)

module.exports = router;