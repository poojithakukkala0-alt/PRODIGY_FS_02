const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: false, trim: true },
  username: { type: String, required: false, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
