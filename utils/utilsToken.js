const uuid = require('uuid');
const Code = require('../models/codes');
const User = require('../models/user');


let generateVerificactiontoken = (idUser, destiny) => {
    /**
     * idUser
     */
    return new Promise(function(resolve, reject) {
        User.findOne({ _id: idUser })
            .limit(1)
            .exec((err, userDb) => {
                if (err) {
                   reject({
                    ok:false,
                    message: err
                    });
                } else {
                    console.log(userDb._id)
                    let accessToken = new Code({
                        user: userDb._id
                    });

                    if(destiny=="phone"){
                        accessToken.code_phone =  generateTokenCode()
                    }
                    
                    if(destiny=="email"){
                        accessToken.code_email =  generateTokenCode()
                    }

                    accessToken.save((err, accTok) => {
                        console.log(accTok)
                        if (err) {
                            reject({
                                ok:false,
                                message: err
                            });
                        } else {
                            resolve(accTok);
                        }
                    });
                };
            });
        });
    };

let deleteTokenCode = (code) => {
    Code.deleteOne({ code: code }, (err, deleted) => {
        if (err) console.log('ERROR', err);
        console.log('Deleted code');
    });
}

let generateTokenCode = (code) => {
    let uuid_body = uuid.v1().toString();
    code = uuid_body.slice(0, 8);
    return code
}

module.exports = {
    generateVerificactiontoken,
    deleteTokenCode
}