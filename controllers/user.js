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
    user.userId = req.body.userId;
    user.name = req.body.name;
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

exports.delete = (req, res) => {
    User.deleteOne({ _id: req.params.id }, (err, contact) => {
        if (err) {
            res.status(500).send(err)
        } else {
            if (contact.deletedCount) {
                res.status(200).send({
                    status: 'success',
                    message: `User Deleted`
                })
            } else {
                res.status(422).send({
                    status: 'failed',
                    message: `No id found`
                }) 
            }
        }
    }) 
}

exports.deleteAll = (req, res) => {
    User.remove({}, (err, contact) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({
                status: 'success',
                message: `All users deleted`
            });
        }
    })
}