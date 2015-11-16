"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.Pipeable = Pipeable;
exports["default"] = _pipe;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Pipeable(previus) {
  if (arguments.length === 0) {
    throw new Error("Pipe function need a first run argument");
  }
  return function Pipe() {
    var fn = arguments[0] === undefined ? null : arguments[0];

    if (arguments.length === 0) {
      return previus;
    }

    var args = Array.prototype.slice.call(arguments, 1);
    var args = [previus].concat(args);
    return Pipeable(fn.apply(null, args));
  };
}

function _pipe(input) {
  if (arguments.length === 0) {
    throw new Error("Pipe function need a first run argument");
  }
  return new Chain(input);
}

var Chain = (function () {
  function Chain(value) {
    _classCallCheck(this, Chain);

    this.value = value;
  }

  _createClass(Chain, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
  }, {
    key: "pipe",
    value: function pipe(fn) {
      if (arguments.length == 1) {
        this.value = fn(this.value);
      } else {
        var args = Array.prototype.slice.call(arguments, 1);
        this.value = fn.apply(null, [this.value].concat(args));
      }
      return this;
    }
  }, {
    key: "result",
    value: function result() {
      return this.value;
    }
  }]);

  return Chain;
})();
