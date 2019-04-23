const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workout = new Schema({
  title: { type: String, required: false },
  exercises: [],
  createdDate: { type: Date, default: Date.now }
});

workout.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Workout', workout);