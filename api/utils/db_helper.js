'use strict'

//DB connection
// =============================================================================
var mongoose = require('mongoose');
var uri = 'mongodb://heroku_bm8t3wbq:eba6slghb8m3dqtb6b95repnmv@ds143132.mlab.com:43132/heroku_bm8t3wbq';

mongoose.Promise = require('bluebird');

function connect(){
    mongoose.connect(process.env.MONGODB_URI || uri, { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
}

module.exports = {
    connect: connect,
    db : mongoose
};