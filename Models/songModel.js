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
      validate: [validator.isAlpha, 'Song name must only contain characters'],
    },
    slug: String,
    lyricist: {
      type: String,
      required: [true, 'A song must have a lyricist!'],
      trim: true,
      validate: [
        validator.isAlpha,
        'lyricist name must only contain characters',
      ],
    },
    singer: {
      type: [String],
      required: [true, 'A song must have a singer name!'],
      trim: true,
      validate: [
        validator.isAlpha,
        'Singer names must only contain characters',
      ],
    },
    releaseDate: {
      type: Date,
      required: [true, 'Release date is required!'],
    },
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
