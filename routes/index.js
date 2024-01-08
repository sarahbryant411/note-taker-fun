const router = require('express').Router();
const htmlRoutes = require('./html-routes.js');
const apiRoutes = require('./api-routes.js');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;