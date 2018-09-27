"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compile = exports.default = void 0;

var _pythonShell = require("python-shell");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Python = function Python() {
  _classCallCheck(this, Python);
}
/*
    static compile = (args, code) => {
        let options = {
            args: args
        };

        PythonShell.runString(code, options, function (err, results) {
            if (err) throw err;
            console.log(results);
            console.log('finished');
        });
    }*/
;

exports.default = Python;

function compiler() {
  return function (obj) {
    //console.log(obj);
    var options = null;

    _pythonShell.PythonShell.runString(obj, options, function (err, results) {
      if (err) throw err;
      console.log(results);
    });
  };
}

var compile = function compile(obj) {
  if (_typeof(obj) === 'object' && !Array.isArray(obj)) {
    return compiler(obj);
  }

  return compiler()(obj);
};

exports.compile = compile;