const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Workout = db.Workout;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Workout.find().select('-hash');
}

async function getById(id) {
    return await Workout.findById(id).select('-hash');
}

async function create() {
    const workout = new Workout();
    await workout.save();
}

async function update(id, userParam) {
    const user = await Workout.findById(id);

    Object.assign(workout, workoutParam);

    await workout.save();
}

async function _delete(id) {
    await Woekout.findByIdAndRemove(id);
}