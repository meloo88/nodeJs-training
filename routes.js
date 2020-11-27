let router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    })
});

module.exports = router;
