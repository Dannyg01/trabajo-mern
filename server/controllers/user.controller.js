
const User = require("../models/user.model")

async function getMe(req, res) {
    const { user_id } = req.user
    const response = await User.findById(user_id)

    if(!response){
        res.status(400).send({msg: "No se ha encontrado el usuario"})
    } else {
        res.status
    }
    console.log(req. user)
    res.status(200).send({msg: "OK"})
}

module.exports = {
    getMe,
}