require('dotenv').config();

exports.sendMessageWhatsapp = async (req, callback) => {
    console.log("whatsapp.services.sendMessage.sendMessageWhatsapp")
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: 'Hola desde node',
            to: 'whatsapp:+573204288616'
        })
        .then(message => console.log(message.sid));
}
