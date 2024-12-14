const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.post('/api/register', (req, res) => {
  const { name, email, phone, dob } = req.body;
  res.json({ message: `User ${name} registered successfully!` });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
