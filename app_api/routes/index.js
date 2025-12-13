const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// GET: All trips in the list
// POST: Add a trip to the list
router
    .route("/trips")
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

// GET: A single Trip by a Code - Requires Parameter
// PUT: Update a specific trip - Requires Parameters
// DELETE: Remove a specific trip - Requires Parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip)
    .delete(tripsController.tripsDeleteTrip);

module.exports = router;