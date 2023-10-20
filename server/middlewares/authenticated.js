const jwt = require("jsonwebtoken")

function asureAuth(req, res, next){
    console.log("Hola estoy en asure auth")
    res.status(500).send({msg:})
    next()
}

module.exports = {
    asureAuth
}