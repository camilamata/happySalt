let express = require("express");
let controller = require("../controllers/clientsControllers");
let router = express.Router();

router.post("/registerClient", controller.register);



module.exports = router;