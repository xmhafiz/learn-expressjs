const express = require('express');
const router = express.Router();
const LaneController = require('../controllers/LaneController');

router.get('/:laneId?', LaneController.get);
router.post('/', LaneController.create);

module.exports = router