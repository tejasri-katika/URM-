import React from 'react';

import './css/slider.css';
// import './css/style.css';
import './css/custom.css';
// import './css/font-awesome.css';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="box">
        <h2>Job Postings</h2>
        <ul className="popular">
          <li>
            <a href="login.html">Research Scientist (Ph.D.) - Biotechnology: </a>
            <p>Institution: University of Texas at Arlington</p>
            <p>Responsibilities: Conducting cutting-edge research, designing experiments, analyzing data, publishing research papers, and collaborating with interdisciplinary teams to advance biotechnological innovations.</p>
          </li>
          <li>
            <a href="login.html">Data Scientist (Postgraduate) - Technology:</a>
            <p>Institution: University of Texas at Arlington</p>
            <p>Responsibilities: Analyzing and interpreting complex datasets, developing machine learning models, deriving actionable insights, and contributing to data-driven decision-making in technology companies.</p>
          </li>
          <li>
            <a href="login.html">Clinical Psychologist (Ph.D.) - Healthcare:</a>
            <p>Institution: University of Texas at Dallas</p>
            <p>Responsibilities: Diagnosing and treating mental health disorders, conducting psychological assessments, providing therapy to patients, and collaborating with healthcare professionals in clinical settings.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
