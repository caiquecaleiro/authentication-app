const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On Save Hook, encrypt password
// Before saving a model, run this
userSchema.pre('save', function(next) {
  const user = this;

  // generate a salta dn then run a callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    
    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      // overwrites our password with the encrypted one
      user.password = hash;
      next();
    });
  });
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;