// frontend\src\components\SkillExchangeList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SkillExchangeList = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/skills')
      .then(response => {
        setSkills(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the skills!', error);
      });
  }, []);

  return (
    <div>
      <h1>Skill Exchange Listings</h1>
      <ul>
        {skills.map(skill => (
          <li key={skill._id}>
            <h2>{skill.skill}</h2>
            <p>{skill.description}</p>
            <p>Offered by: {skill.offeredBy}</p>
            <p>Status: {skill.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillExchangeList;
