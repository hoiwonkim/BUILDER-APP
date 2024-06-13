// backend\controllers\skillController.js

const SkillExchange = require('../models/SkillExchange');

const getSkills = (req, res) => {
  SkillExchange.find()
    .then(skills => res.json(skills))
    .catch(err => res.status(400).json('Error: ' + err));
};

const addSkill = (req, res) => {
  const { skill, offeredBy, description } = req.body;
  const newSkill = new SkillExchange({ skill, offeredBy, description });

  newSkill.save()
    .then(() => res.json('Skill exchange added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

module.exports = { getSkills, addSkill };
