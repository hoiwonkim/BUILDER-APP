// backend\routes\jobs.js

const router = require('express').Router();
const { getJobs, addJob } = require('../controllers/jobController');

router.route('/')
  .get(getJobs)
  .post(addJob);

module.exports = router;
