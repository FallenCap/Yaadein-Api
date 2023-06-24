const express = require('express');
const songController = require('../Controllers/songController');

const router = express.Router();

// *defining Routes
router
  .route('/')
  .get(songController.getAllSongs)
  .post(songController.createSong);

router
  .route('/:id')
  .get(songController.getSong)
  .patch(songController.updateSong)
  .delete(songController.deleteSong);

module.exports = router;
