const router = require('express').Router();
const eventsApiRouter = require('./api/eventsApi.routes');
const booksApiRouter = require('./api/booksApi.routes');
const authApiRouter = require('./api/authApi.routes');

router.use('/api/events', eventsApiRouter);
router.use('/api/books', booksApiRouter);
router.use('/api/auth', authApiRouter);

module.exports = router;
