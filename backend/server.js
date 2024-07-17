const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors())
// Import Routes
const taskRoutes = require('./src/routes/taskRoutes');

// Routes Middleware
app.use('/api/tasks', taskRoutes);

// MongoDB Connection
const connections = async()=>{
  try {
   const connection =await mongoose.connect(`${process.env.MONGO_URI}/Todoupskill`)
   console.log(connection.connection.host);
  } catch (error) {
    console.log(error);
  }
}
connections()
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
