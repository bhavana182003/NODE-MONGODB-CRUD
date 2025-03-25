const express = require('express'); const mongoose = require('mongoose'); 
const User = require('./models/User'); // 
//Import the User model
const app = express(); 
const port = 3000; 
app.use(express.json());
 mongoose.connect('mongodb://localhost:27017/mydatabase',
  { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(() => console.log('MongoDB connected...')) .catch(err => console.log(err));
  // Create a new user 
  app.post('/users', async (req, res) =>
     { try { const user = new User(req.body); await user.save(); res.status(201).send(user); } catch (err) { res.status(400).send(err); } });
  // Get all users
   app.get('/users', async (req, res) =>
     { try { const users = await User.find(); res.status(200).send(users); } catch (err) { res.status(500).send(err); } }); app.listen(port, () => 
        { console.log(`Server is running on port ${port}`); 
}
);
// const express = require('express');
// const mongoose = require('mongoose');
// const User = require('./models/User'); // Import the User model

// const app = express();
// const port = 3000; // Hardcode the port
// const mongoUri = 'mongodb://localhost:27017/mydatabase'; // Hardcode the MongoDB URI

// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(mongoUri)
//   .then(() => {
//     console.log('MongoDB connected...');

//     // Start the server only after successful DB connection
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch(err => {
//     console.error('Database connection error:', err);
//   });

// // Create a new user
// app.post('/users', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).send(user);
//   } catch (err) {
//     if (err.name === 'ValidationError') {
//       const messages = Object.values(err.errors).map(e => e.message);
//       res.status(400).json({ errors: messages });
//     } else {
//       res.status(500).send(err);
//     }
//   }
// });

// // Get all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).send(users);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });
