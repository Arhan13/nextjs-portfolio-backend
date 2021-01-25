const config = require('../config');
const mongoose = require('mongoose');

require('./models/portfolio');
require('./models/blogs');

exports.connect = () => {
  //Before we connect to database

  return mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }, (err) => {
    if (err) { console.error(err); }
    else {
      console.log('Connected to DB!');
    }
  })
}