// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = 5000;

// app.use(cors()); // Allow frontend to access backend

// // Example data
// const interns = [
//   {
//     name: "Jayasri",
//     referralCode: "jayasri2055",
//     amountRaised: 12500
//   },
//   { name: "Priya", referralCode: "priya2025", amountRaised: 10000 },
//   { name: "Anjali", referralCode: "anjali2025", amountRaised: 8000 },
//   { name: "Rahul", referralCode: "rahul2025", amountRaised: 6000 }
// ];

// app.get('/', (req, res) => {
//   res.send('Welcome to the Intern Portal API!');
// });

// // API endpoint
// app.get('/api/interns', (req, res) => {
//   res.json(interns);
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const interns = [
  {
    name: "Jayasri",
    referralCode: "jayasri2055",
    amountRaised: 12500
  },
  { name: "Priya", referralCode: "priya2025", amountRaised: 10000 },
  { name: "Anjali", referralCode: "anjali2025", amountRaised: 8000 },
  { name: "Rahul", referralCode: "rahul2025", amountRaised: 6000 }
];

app.get('/', (req, res) => {
  res.send('Welcome to the Intern Portal API!');
});

app.get('/api/interns', (req, res) => {
  res.json(interns);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


