const express = require('express');
const router = express.Router();
const workoutService = require('./workout.service');

router.post('/new', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    workoutService.create()
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    workoutService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    workoutService.getById(req.body.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    workoutService.update(req.body.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    workoutService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}