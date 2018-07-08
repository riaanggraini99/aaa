const {User}  = require('../../models')
//const register = require('../routes/register');

module.exports = {
    async register(req, res){
        try {
        const user = await User.create(req.body)
        res.send(user.toJSON())
    }catch(err){
        //if email already exist
        res.status(400).send({
            error: "error"
        })
}
}
}