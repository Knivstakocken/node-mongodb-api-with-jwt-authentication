const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workout = new Schema({
  title: { type: String, required: false },
  exercises: [new Schema({
      title: { type: String, required: false, },
      description: { type: String, required: false, },
      sets: [new Schema({
        unit: { type: String, require: true },
        value: { type: String, required: true }
      })]
  })],
  createdDate: { type: Date, default: Date.now }
});

workout.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Workout', workout);