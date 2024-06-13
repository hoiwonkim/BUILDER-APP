//  frontend\src\components\JobList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the jobs!', error);
      });
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>Posted by: {job.postedBy}</p>
            <p>Status: {job.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
