const Test = require('./../models/testModel');

exports.signup = async (req,res) => {
    try{
        // console.log(req.body);
        const newUser = await Test.create(req.body);
        res.status(200).json({
            data: newUser
        });
    }
    catch(err){
        res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
};

exports.login = async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
    
        const user = await Test.findOne({email: email})
        if(user){
            if(password === user.password){
                res.status(200).json({
                    message: 'Your password is correct',
                    data: user
                })
            }
            else {
                res.send(404).json({
                    message: 'password is incorrect',
                })
            }
        }
        else {
            res.send(404).json({
                message: 'not found'
            })
        }
    }
    catch(err){
        res.status(400).json({
            status: 'something went wrong',
            message: err.message
    })
}};