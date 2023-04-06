var express = require('express');
var router = express.Router();

//import  controllers
let messageController = require("../controllers/senMessageController");
/**
 * define message route
 */
router.get("/send", messageController.sendMessageC)
router.post("/webhook", messageController.getWebhook)

module.exports = router;