let router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    })
});

const userController = require('./controllers/user');

router.route('/users').get(userController.list);
router.route('/add').post(userController.add);

module.exports = router;
