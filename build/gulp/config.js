'use strict';
const path = require('path');

const prod = process.env.NODE_ENV && process.env.NODE_ENV === 'production';
const tempBuild = process.env.BUILD_DEST;
const buildPath = !!tempBuild && prod ? tempBuild.toString() : (prod ? '.dist/' : '.dev/');
const root = path.resolve(__dirname, '..', '..');

module.exports = {
  prod,
  buildPath,
  root,
};
