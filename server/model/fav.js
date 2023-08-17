const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
  },
  type: {
    type: String,
  }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
