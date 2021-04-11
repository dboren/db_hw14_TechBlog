const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const login = require('./login');


router.use('/', homeRoutes);

module.exports = router;