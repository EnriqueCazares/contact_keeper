const express = require('express');
const connectDB = require('./config/db');

// Connect Database
connectDB();

const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API...' })
);

// Mount Routes
const users = require('./routes/users');
const contacts = require('./routes/contacts');
const auth = require('./routes/auth');

// Define Routes
app.use('/api/users', users);
app.use('/api/contacts', contacts);
app.use('/api/auth', auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
