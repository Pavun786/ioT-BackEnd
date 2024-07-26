const express= require("express")
const router = express.Router()
const {createdevice,getAllDevicesById,getAllDevices,findSingleDevice,editDevice,deleteDevice} = require("../Controller/deviceController")
const auth = require("../middleware/authMiddleware")


router.post("/create",auth,createdevice)
router.get("/getAll/:userId",auth,getAllDevicesById)
router.get("/getAllDevices",auth,getAllDevices)
router.get("/:id",auth,findSingleDevice)
router.put("/:id",auth,editDevice)
router.delete("/:id",auth,deleteDevice)

module.exports = router;