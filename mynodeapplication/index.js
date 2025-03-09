import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';
const nodemailer = require('nodemailer');


const app = express();
app.use(express.static('public'));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "urmapplication",
    authPlugin: "mysql_native_password" // Add this line

});
db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
    } else {
      console.log('Connected to database');
    }
  });


  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'urmapplication'
  });
  
// Middleware to parse JSON data
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json("hello");
});

// POST request to insert a candidate into the candidate table
app.post("/insertCandidate", (req, res) => {
    console.log("hello")
    const {
        firstName,
        lastName,
        phoneNumber,
        email,
        dateOfBirth,
        gender,
        ethnicity,
        nationality,
        fieldOfStudies,
        qualification
    } = req.body;

    console.log(req.body)
    const insertQuery = `INSERT INTO candidate (firstname, lastname, phonenumber, email, dateofbirth, gender, ethnicity, nationality, feildofstudies, qualification) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
        insertQuery,
        [
            firstName,
            lastName,
            phoneNumber,
            email,
            dateOfBirth,
            gender,
            ethnicity,
            nationality,
            fieldOfStudies,
            qualification
        ],
        (error, result) => {
            if (error) {
                console.error("Error inserting candidate:", error);
                res.status(500).json({ error: "Error inserting candidate" });
            } else {
                console.log("Candidate inserted successfully");
                res.status(200).json({ message: "Candidate inserted successfully" });
            }
        }
    );
});


app.get("/getCandidates", (req, res) => {
    const selectQuery = `SELECT * FROM candidate`;

    db.query(selectQuery, (error, results) => {
        if (error) {
            console.error("Error retrieving candidates:", error);
            res.status(500).json({ error: "Error retrieving candidates" });
        } else {
            console.log("Candidates retrieved successfully");
            res.status(200).json(results);
        }
    });
});


// POST request to insert an institution into the institution table
app.post("/insertInstitution", (req, res) => {
    const {
        institutionName,
        email,
        phoneNumber,
        researchAreas,
        address
    } = req.body;

    const insertQuery = `INSERT INTO institution (institutionName, email, phoneNumber, researchAreas, address) VALUES (?, ?, ?, ?, ?)`;

    db.query(
        insertQuery,
        [
            institutionName,
            email,
            phoneNumber,
            researchAreas,
            address
        ],
        (error, result) => {
            if (error) {
                console.error("Error inserting institution:", error);
                res.status(500).json({ error: "Error inserting institution" });
            } else {
                console.log("Institution inserted successfully");
                res.status(200).json({ message: "Institution inserted successfully" });
            }
        }
    );
});


// POST request to insert a recruiter into the recruiter table
app.post("/insertRecruiter", (req, res) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        state,
        institution,
        recruiterAgency
    } = req.body;

    const insertQuery = `INSERT INTO recruiter (firstName, lastName, email, phoneNumber, state, institution, recruiterAgency) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(
        insertQuery,
        [
            firstName,
            lastName,
            email,
            phoneNumber,
            state,
            institution,
            recruiterAgency
        ],
        (error, result) => {
            if (error) {
                console.error("Error inserting recruiter:", error);
                res.status(500).json({ error: "Error inserting recruiter" });
            } else {
                console.log("Recruiter inserted successfully");
                res.status(200).json({ message: "Recruiter inserted successfully" });
            }
        }
    );
});




// POST request to insert a DEI officer into the dei table
app.post("/insertDEIOfficer", (req, res) => {
    const {
        firstName,
        lastName,
        institutionName,
        email,
        phoneNumber
    } = req.body;

    const insertQuery = `INSERT INTO dei (firstName, lastName, institutionName, email, phoneNumber) VALUES (?, ?, ?, ?, ?)`;

    db.query(
        insertQuery,
        [firstName, lastName, institutionName, email, phoneNumber],
        (error, result) => {
            if (error) {
                console.error("Error inserting DEI officer:", error);
                res.status(500).json({ error: "Error inserting DEI officer" });
            } else {
                console.log("DEI officer inserted successfully");
                res.status(200).json({ message: "DEI officer inserted successfully" });
            }
        }
    );
});


app.post('/register', (req, res) => {
    const { email, password, institutionname, role, Registrationcol } = req.body;
  
    console.log(email, password, institutionname, role, Registrationcol )
    const insertQuery = `
      INSERT INTO registration (email, password, institutionname, role, Registrationcol)
      VALUES (?, ?, ?, ?, ?)
    `;
  
    db.query(insertQuery, [email, password, institutionname, role, Registrationcol], (err, result) => {
      if (err) {
        console.error('Error inserting registration:', err);
        res.status(500).json({ success: false, message: 'Error inserting registration' });
      } else {
        console.log('Registration inserted successfully');
        res.status(200).json({ success: true, message: 'Registration inserted successfully' });
      }
    });
  });

// loginc endpoint
app.post('/loginc', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    console.log("heeeeeeeeeee")
  
    // Check if user email exists in the registration table
    const checkQuery = 'SELECT * FROM registration WHERE email = ?';
    db.query(checkQuery, [email], (checkErr, results) => {
      if (checkErr) {
        console.error('Error checking user email:', checkErr);
        return res.status(500).json({ success: false, message: 'An error occurred' });
      }
  
      if (results.length === 0) {
        return res.json({ success: false, message: 'User email not found' });
      }
  
      // User email exists, check if password matches
      const user = results[0];
      if (user.password === password) {
        return res.json({ success: true, message: 'Login successful', role: user.role });
    } else {
        return res.json({ success: false, message: 'Invalid password' });
      }
    });
  });
  


  // Define an endpoint to retrieve candidate data by email
app.post('/getCandidateData', (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
  
    const query = 'SELECT * FROM candidate WHERE email = ?';
  
    db.query(query, [email], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.status(500).json({ error: 'An error occurred while fetching data' });
      }
  
      if (results.length === 0) {
        return res.status(404).json({ error: 'Candidate not found' });
      }
  
      const candidateData = results[0];
      res.json({ success: true, data: candidateData });
    });
  });
  

// Assuming you have already set up your app and database connection

// Endpoint for updating candidate data
app.post('/updateCandidateData', async (req, res) => {
    const { email, data } = req.body;
    console.log(email, data)
  
    // Check if the candidate exists in the database
    const candidateExists = await checkIfCandidateExists(email);
  
    if (!candidateExists) {
      return res.status(404).json({ success: false, error: 'Candidate not found' });
    }
  
    try {
      // Update the candidate data in the database
      const updateQuery = 'UPDATE candidate SET ? WHERE email = ?';
      await pool.query(updateQuery, [data, email]);
  
      res.json({ success: true, message: 'Candidate data updated successfully' });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  });

  
  // Function to check if a candidate exists in the database
async function checkIfCandidateExists(email) {
    try {
      const selectQuery = 'SELECT COUNT(*) AS count FROM candidate WHERE email = ?';
      const [rows] = await pool.query(selectQuery, [email]);
      const count = rows[0].count;
  
      return count > 0;
    } catch (error) {
      console.error('An error occurred while checking candidate existence:', error);
      return false;
    }
  }

  

  app.post('/getRecruiterData', (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    // console.log(email)

    const query = 'SELECT * FROM recruiter WHERE email = ?';

    db.query(query, [email], (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.status(500).json({ error: 'An error occurred while fetching data' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'Recruiter not found' });
      }

      const recruiterData = results[0];
      res.json({ success: true, recruiter: recruiterData });
    });
});



app.post('/getInstitutionData', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    // Replace 'institution' with the actual name of your institution table
    const query = 'SELECT * FROM institution WHERE email = ?';

    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ error: 'An error occurred while fetching data' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Institution not found' });
        }

        const institutionData = results[0];
        res.json({ success: true, institution: institutionData });
    });
});













// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Change this to the email service you want to use
    auth: {
        user: 'your-email@gmail.com', // Your email address
        pass: 'your-password' // Your email password or an app-specific password
    }
});


app.post('/sendEmail', async (req, res) => {
    try {
        const { senderEmail, receiverEmail, message } = req.body;

        // Send email
        const mailOptions = {
            from: senderEmail,
            to: receiverEmail,
            subject: 'New Message',
            text: message
        };

        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'An error occurred while sending the email' });
    }
});








app.listen(5000, () => {
    console.log('Server is running on port 5000 :)');
});
