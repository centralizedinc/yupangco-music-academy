'use strict'

//DB connection
// =============================================================================
var mongoose = require('mongoose');
var uri = 'mongodb://heroku_1px691zj:rvee6obnilgd7lgktrkf9e3ibc@ds151007.mlab.com:51007/heroku_1px691zj';

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