const mongoose = require('mongoose');
const validator = require('validator');
const slugify = require('slugify');

const songSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A song must have a name!'],
      unique: true,
      trim: true,
    },
    slug: String,
    lyricist: {
      type: String,
      required: [true, 'A song must have a lyricist!'],
      trim: true,
    },
    singer: {
      type: [String],
      required: [true, 'A song must have a singer name!'],
      trim: true,
    },
    movieName: {
      type: String,
      required: [true, 'A song must belong to movie!'],
      trim: true,
    },
    releaseDate: Date,
    // rating: {
    //   type: Number,
    //   default: 4.0,
    //   min: [1, 'Rating must be above 1.0'],
    //   max: [5, 'Rating must be below 5.0'],
    // },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// *Document Middlewares
songSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
