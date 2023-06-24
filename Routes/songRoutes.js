const express = require('express');
const songController = require('../Controllers/songController');

const router = express.Router();

// TODO:defining Routes

// *top-5-rated-songs
router
  .route('/top-5-rated-songs')
  .get(songController.aliasTopSongs, songController.getAllSongs);

// * Lata Mangeshkar specia;
router.route('/lata-mangeshkar-special').get(songController.getLataSpecial);

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
