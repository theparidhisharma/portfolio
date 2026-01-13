const express = require('express');
const cors = require('cors');
const linkedinRoutes = require('./routes/linkedin.routes');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Middleware
app.use(cors()); // In production, you might want to restrict this to your frontend domain
app.use(express.json());

// Routes
app.use('/api/linkedin', linkedinRoutes);
app.use('/api/ai', aiRoutes);

// Health Check
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api', (req, res) => {
  res.send('Backend API connected');
});

module.exports = app;