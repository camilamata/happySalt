let express = require("express");
let controller = require("../controllers/clientsControllers");
let router = express.Router();

router.post("/registerClient", controller.register);
router.get("/searchClient", controller.getByName);



module.exports = router;