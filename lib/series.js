'use strict';

var _ = require('lodash');
var asyncDone = require('async-done');
var nowAndLater = require('now-and-later');

var helpers = require('./helpers');

function buildSeries(){
  var args = helpers.verifyArguments(arguments);

  var extensions = helpers.getExtensions(_.last(args));

  function series(done){
    nowAndLater.series(args, asyncDone, extensions, done);
  }

  return series;
}

module.exports = buildSeries;