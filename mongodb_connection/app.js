var app = require('../express');
var q = require('q');

var connectionString = process.env.MONGO_CONNECTION_STRING;
if (process.env.MLAB_USERNAME) {
    var username = process.env.MLAB_USERNAME;
    var password = process.env.MLAB_PASSWORD;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += process.env.MLAB_CONNECTION_STRING;
}

var mongoose = require("mongoose");
mongoose.connect(connectionString, {
    useMongoClient: true,
    /* other options */
});
mongoose.Promise = q.Promise;
