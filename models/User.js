const mongoose = require('mongoose'); 
const userSchema = new mongoose.Schema({ 
    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true },
     age: { type: Number, required: true },
      date: { type: Date, default: Date.now } });
       module.exports = mongoose.model('User', userSchema);

// models/User.js
// models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
// });

// module.exports = mongoose.model('User', userSchema);
