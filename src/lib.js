'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  hash: (password, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        callback(err);
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          callback(err, hash);
        });
      }
    });
  },
  compare: (password, hash, callback) => {
    bcrypt.compare(password, hash, callback);
  }
};
