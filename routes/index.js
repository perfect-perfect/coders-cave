const router = require('express').Router();
const dash = require('./dashboard-routes');
const homepage = require('./home-routes');
const apiRoutes = require('./api');

router.use('/', homepage);
router.use('/dashboard', dash);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;