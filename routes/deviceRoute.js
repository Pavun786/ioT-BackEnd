const express= require("express")
const router = express.Router()
const {createdevice,getAllDevicesById,getAllDevices,findSingleDevice,editDevice,deleteDevice} = require("../Controller/deviceController")
const auth = require("../middleware/authMiddleware")


router.post("/create",createdevice)
router.get("/getAll/:userId",getAllDevicesById)
router.get("/getAllDevices",getAllDevices)
router.get("/:id",findSingleDevice)
router.put("/:id",editDevice)
router.delete("/:id",deleteDevice)

module.exports = router;