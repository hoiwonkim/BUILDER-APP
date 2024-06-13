// backend\routes\trades.js

const router = require('express').Router();
const { getTrades, addTrade } = require('../controllers/tradeController');

router.route('/')
  .get(getTrades)
  .post(addTrade);

module.exports = router;
