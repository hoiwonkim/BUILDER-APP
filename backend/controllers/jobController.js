// backend\controllers\jobController.js

const Job = require('../models/Job');

const getJobs = (req, res) => {
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
};

const addJob = (req, res) => {
  const { title, description, postedBy } = req.body;
  const newJob = new Job({ title, description, postedBy });

  newJob.save()
    .then(() => res.json('Job added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

module.exports = { getJobs, addJob };
