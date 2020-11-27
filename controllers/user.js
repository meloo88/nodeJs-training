User = require('../models/user');

exports.list = (req, res) => {
    User.get((err, user) => {
        if (err) {
            res.status(500).send({
                status: 'error',
                message: err
            });
        }
            res.status(200).send({
                status: 'Success',
                message: "Got User successfully",
                data: user
            });
        })
}

exports.add = (req, res) => {
    var user = new User();
    console.log(req.body, user)
    user.userId = req.body.userId;
    user.name = req.body.surname;
    user.email = req.body.email;
    user.surname = req.body.surname;

    user.save((err) => {
        if (err) {
            res.status(500).send(err)
         } else {
            res.status(200).send({
                message: 'User added',
                data: user
            })
        }
    })
}