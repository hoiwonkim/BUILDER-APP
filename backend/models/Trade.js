//  backend\models\Trade.js

const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  offeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  requestedItem: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Trade', tradeSchema);
