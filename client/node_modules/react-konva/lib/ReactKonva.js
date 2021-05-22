/**
 * Based on ReactArt.js
 * Copyright (c) 2017-present Lavrenov Anton.
 * All rights reserved.
 *
 * MIT
 */
'use strict';

exports.__esModule = true;

var _ReactKonvaCore = require('./ReactKonvaCore');

Object.keys(_ReactKonvaCore).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReactKonvaCore[key];
    }
  });
});

require('konva');