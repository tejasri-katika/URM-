import React from 'react';
import '../components/css/slider.css';
import '../components/css/style.css';
import '../components/css/custom.css';
const CandidateDashboard = () => {
    return (
      <div id="wrapper">
        <div id="header">
          <div className="logo">
            <a href="candidatedashboard.html">
              <img src="../images/urmlogo.png" alt="" />
            </a>
          </div>
          <div className="sponsor">
            <a href="public/index.html" className="btn">
              Logout
            </a>{' '}
            &nbsp;&nbsp;
            <a href="candidateprofile.html" className="btn">
              Edit Profile
            </a>
          </div>
          <ul className="categories">
            <li>
              <a href="candidatedashboard.html" className="active">
                Dashboard
              </a>
            </li>
            <li>
              {/* Add nested navigation links here if needed */}
            </li>
            <li>
              <a href="candidatejobpositions.html">Applied Job Positions</a>
            </li>
          </ul>
        </div>
        <div id="container">
          <div id="content">
            {/* begin recent posts */}
            <div className="recent">
              {/* begin post */}
              <div className="o post">
                <a href="candidatedashboard.html">
                  <img src="../images/jobs.png" alt="" width="150" height="150" />
                </a>
                <h2>
                  <a href="candidatedashboard.html">Professor of Computer Science</a>
                </h2>
                <p>Institution: University of Texas at Arlington</p>
                <p>
                  Responsibilities: Delivering high-quality and engaging lectures, seminars, and laboratory sessions to
                  undergraduate and/or graduate students in Computer Science. Developing and updating course materials,
                  syllabi, and assessments to ensure a challenging and innovative learning experience.
                </p>
                <p className="apply">
                  <a href="candidatedashboard.html">Apply</a>
                </p>
                <div className="break"></div>
              </div>
              {/* end post */}
              {/* begin post */}
              <div className="o post">
                <a href="candidatedashboard.html">
                  <img src="../images/jobs.png" alt="" width="150" height="150" />
                </a>
                <h2>
                  <a href="candidatedashboard.html">Research Scientist (Ph.D.) - Biotechnology:</a>
                </h2>
                <p>Institution: University of Texas at Arlington</p>
                <p>
                  Responsibilities: Conducting cutting-edge research, designing experiments, analyzing data, publishing
                  research papers, and collaborating with interdisciplinary teams to advance biotechnological innovations.
                </p>
                <p className="apply">
                  <a href="candidatedashboard.html">Apply</a>
                </p>
                <div className="break"></div>
              </div>
              {/* end post */}
              {/* begin post */}
              <div className="o post">
                <a href="candidatedashboard.html">
                  <img src="../images/jobs.png" alt="" width="150" height="150" />
                </a>
                <h2>
                  <a href="candidatedashboard.html">Data Scientist (Postgraduate) - Technology:</a>
                </h2>
                <p>Institution: University of Texas at Arlington</p>
                <p>
                  Responsibilities: Analyzing and interpreting complex datasets, developing machine learning models,
                  deriving actionable insights, and contributing to data-driven decision-making in technology companies.
                </p>
                <p className="apply">
                  <a href="candidatedashboard.html">Apply</a>
                </p>
                <div className="break"></div>
              </div>
              {/* end post */}
              {/* begin post */}
              <div className="e post">
                <a href="candidatedashboard.html">
                  <img src="../images/jobs.png" alt="" width="150" height="150" />
                </a>
                <h2>
                  <a href="candidatedashboard.html">Clinical Psychologist (Ph.D.) - Healthcare:</a>
                </h2>
                <p>Institution: University of Texas at Dallas</p>
                <p>
                  Responsibilities: Diagnosing and treating mental health disorders, conducting psychological assessments,
                  providing therapy to patients, and collaborating with healthcare professionals in clinical settings.
                </p>
                <p className="apply">
                  <a href="candidatedashboard.html">Apply</a>
                </p>
                <div className="break"></div>
              </div>
              {/* end post */}
            </div>
            {/* end recent posts */}
          </div>
        </div>
        {/* BEGIN footer */}
        <div id="footer">
          <div id="row">
            <div className="col-md-6">All Rights Reserved &copy; URM Application, 2023</div>
            <div className="col-md-6 left-align">Designed By URM Students</div>
          </div>
        </div>
        <div className="chat">
          <input type="checkbox" id="click" />
          <label for="click">Chat</label>
          {/* Added label "Chat" here */}
          <i className="fab fa-facebook-messenger"></i>
          <i className="fas fa-times"></i>
        </div>
        <div className="wrapper">
          <div className="head-text">Let's chat? - Online</div>
          <div className="chat-box">
            <div className="desc-text"></div>
            {/* <form action="#"> */}
            <div className="field">
              <input type="email" placeholder="Your Email Address" required />
            </div>
            <div className="field">
              <input type="email" placeholder="Receiver Email Address" required />
            </div>
            <div className="field textarea">
              <textarea cols="30" rows="10" placeholder="write a message.." required></textarea>
            </div>
            <div className="field">
              <button type="submit">Start Chat</button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default CandidateDashboard;
