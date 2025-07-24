const express = require('express');
const cors = require('cors');
const statusRoutes = require('./routes/status');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/status', statusRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Status backend listening on port ${PORT}`);
});
