'use strict';
const path = require('path');

const prod = process.env.NODE_ENV && process.env.NODE_ENV === 'production';

module.exports = {
  prod: prod,
  buildPath: prod ? '.dist/' : '.dev/',
  root: path.resolve(__dirname, '..', '..'),
};
