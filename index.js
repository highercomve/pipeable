"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function Pipeable() {
  var previus = arguments[0] === undefined ? null : arguments[0];

  var pipe = function Pipe() {
    var fn = arguments[0] === undefined ? null : arguments[0];

    if (arguments.length === 0) {
      return previus;
    }

    var args = Array.prototype.slice.call(arguments, 1);
    var args = [previus].concat(args);
    return Pipeable(fn.apply(null, args));
  };

  if (previus === null) {
    throw new Error("Pipe function need a first run argument");
  }
  return pipe;
}

exports["default"] = Pipeable;
module.exports = exports["default"];
