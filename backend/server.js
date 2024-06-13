const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const itemRouter = require('./routes/items');
const tradeRouter = require('./routes/trades');
const skillRouter = require('./routes/skills');
const jobRouter = require('./routes/jobs');

app.use('/items', itemRouter);
app.use('/trades', tradeRouter);
app.use('/skills', skillRouter);
app.use('/jobs', jobRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
