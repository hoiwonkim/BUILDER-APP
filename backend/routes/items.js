// backend\routes\items.js

const router = require('express').Router();
const { getItems, addItem } = require('../controllers/itemController');

router.route('/')
  .get(getItems)
  .post(addItem);

module.exports = router;
