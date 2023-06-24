const Song = require('../Models/songModel');
const APIFeatures = require('../Utils/apiFeatures');
const catchAsync = require('../Utils/catchAsync');
const AppErr = require('../Utils/appErr');

// *Middleware for top-5-rated-songs
exports.aliasTopSongs = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratings';
  req.query.fields = '-__v';
  next();
};

// *Get Request
exports.getAllSongs = catchAsync(async (req, res, next) => {
  // TODO: execute query
  const features = new APIFeatures(Song, req.query)
    .filter()
    .sort()
    .limitingField()
    .paginate();

  const songs = await features.query;

  res.status(200).json({
    status: 'sucess',
    results: songs.length,
    data: {
      songs,
    },
  });
});

// *Get request by id
exports.getSong = catchAsync(async (req, res, next) => {
  const song = await Song.findById(req.params.id);

  if (!song) {
    return next(
      new AppErr(`No song found eith the __id: ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    status: 'sucess',
    data: {
      song,
    },
  });
});

//* Post Request
exports.createSong = catchAsync(async (req, res, next) => {
  console.log(JSON.stringify(req.body));
  const newSong = await Song.create(req.body);

  res.status(201).json({
    status: 'sucess',
    data: {
      newSong,
    },
  });
});

// *Patch request
exports.updateSong = catchAsync(async (req, res, next) => {
  const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!song) {
    return next(new AppErr(`No song found with the id: ${req.params.id}`, 404));
  }

  res.status(200).json({
    status: 'sucess',
    data: {
      song,
    },
  });
});

// *Delete request
exports.deleteSong = catchAsync(async (req, res, next) => {
  const song = await Song.findByIdAndDelete(req.params.id);

  if (!song) {
    return next(new AppErr(`No song found with the id: ${req.params.id}`, 404));
  }

  res.status(204).json({
    status: 'sucess',
    data: null,
  });
});

// *Special functions

// *lata mangeshkar special
exports.getLataSpecial = catchAsync(async (req, res, next) => {
  const special = await Song.aggregate([
    {
      $match: { singer: 'Lata Mangeshkar' },
    },
    {
      $sort: { rating: -1 },
    },
    {
      $project: {
        _id: 0,
        slug: 0,
        __v: 0,
      },
    },
  ]);

  res.status(200).json({
    status: 'sucess',
    data: {
      special,
    },
  });
});
