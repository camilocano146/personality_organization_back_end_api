const sendMessage = require("../services/sendMessage")

exports.sendMessageC = async(req, res) =>  {
    console.log("whatsapp.controllers.sendMessageController.sendMessageC")
    await sendMessage.sendMessageWhatsapp(req, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(err.status || 400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        })
    })
}

exports.getWebhook = async(req, res) =>  {
    console.log("whatsapp.controllers.sendMessageController.getWebhook")
    console.log(req.body)
    console.log(req.params)
}
