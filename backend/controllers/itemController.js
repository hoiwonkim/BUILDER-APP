// backend\controllers\itemController.js

const Item = require('../models/Item');

const getItems = (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
};

const addItem = (req, res) => {
  const { name, description, owner } = req.body;
  const newItem = new Item({ name, description, owner });

  newItem.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

module.exports = { getItems, addItem };
