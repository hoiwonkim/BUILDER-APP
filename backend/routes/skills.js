// backend\routes\skills.js

const router = require('express').Router();
const { getSkills, addSkill } = require('../controllers/skillController');

router.route('/')
  .get(getSkills)
  .post(addSkill);

module.exports = router;
