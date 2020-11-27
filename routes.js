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
router.route('/delete/:id').delete(userController.delete);
router.route('/deleteAll').delete(userController.deleteAll);

module.exports = router;
