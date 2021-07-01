const mongoose = require('mongoose');

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function () {
  console.log('MONGOOSE QUERY RAN');
  return exec.apply(this, arguments);
};
