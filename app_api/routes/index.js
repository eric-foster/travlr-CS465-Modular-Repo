const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// GET: All trips in the list
router.route("/trips").get(tripsController.tripsList);

// GET: A single Trip by a Code - Requires Parameter
router.route("/trips/:tripCode").get(tripsController.tripsFindByCode);

module.exports = router;