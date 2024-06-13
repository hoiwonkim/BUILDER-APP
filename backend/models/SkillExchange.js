//  backend\models\SkillExchange.js

const mongoose = require('mongoose');

const skillExchangeSchema = new mongoose.Schema({
  skill: { type: String, required: true },
  offeredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'available' },
});

module.exports = mongoose.model('SkillExchange', skillExchangeSchema);
