const express = require("express");

const controller = require("../controllers/clientsControllers");

const router = express.Router();

router.post("/registerClient", controller.register);



module.exports = router;