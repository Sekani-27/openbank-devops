const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'OpenBank API is running',
    timestamp: new Date().toISOString()
  });
});

// Placeholder routes for Week 2
app.get('/api/accounts', (req, res) => {
  res.status(200).json({ message: 'Accounts endpoint - Coming in Week 2' });
});

app.post('/api/auth/signup', (req, res) => {
  res.status(200).json({ message: 'Signup endpoint - Coming in Week 2' });
});

app.post('/api/transactions/deposit', (req, res) => {
  res.status(200).json({ message: 'Deposit endpoint - Coming in Week 2' });
});

app.post('/api/transactions/withdraw', (req, res) => {
  res.status(200).json({ message: 'Withdraw endpoint - Coming in Week 2' });
});

app.get('/api/transactions/history', (req, res) => {
  res.status(200).json({ message: 'History endpoint - Coming in Week 2' });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(` OpenBank Backend running on port ${PORT}`);
  });
}

module.exports = app;
