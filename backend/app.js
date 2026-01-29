const express = require('express');
const linkedinRoutes = require('./routes/linkedin.routes');
const aiRoutes = require('./routes/ai.routes');

const app = express();
const projectRoutes = require("./routes/project.routes");
const cors = require('cors');
app.use(cors({ origin: true }));

app.use(cors({
  origin: [
    'https://paridhisharma.in/'
  ]
}));

app.use("/api/projects", projectRoutes);

const galleryRoutes = require("./routes/gallery.routes");
app.use("/api/gallery", galleryRoutes);


// Middleware
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