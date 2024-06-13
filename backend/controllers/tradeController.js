// backend\controllers\tradeController.js

const Trade = require('../models/Trade');

const getTrades = (req, res) => {
  Trade.find()
    .then(trades => res.json(trades))
    .catch(err => res.status(400).json('Error: ' + err));
};

const addTrade = (req, res) => {
  const { item, offeredBy, requestedItem } = req.body;
  const newTrade = new Trade({ item, offeredBy, requestedItem });

  newTrade.save()
    .then(() => res.json('Trade added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

module.exports = { getTrades, addTrade };
