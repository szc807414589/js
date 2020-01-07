"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.isSymbol = exports.isString = exports.isRegexp = exports.isNumber = exports.isError = exports.isDate = exports.isBool = exports.isNil = exports.isNull = exports.isUndefined = exports.isFunction = exports.isSet = exports.isMap = exports.isObject = exports.isArray = void 0;
//类型检查
var mapTag = '[object Map]';
var setTag = '[object Set]';
var arrayTag = '[object Array]';
var objectTag = '[object Object]';
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
var functionTag = '[object Function]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var numberTag = '[object Number]';
var regexpTag = '[object RegExp]';
var stringTag = '[object String]';
var symbolTag = '[object Symbol]';

var isArray = function isArray(arg) {
  return Object.prototype.toString.call(arg) === arrayTag;
};

exports.isArray = isArray;

var isObject = function isObject(arg) {
  return Object.prototype.toString.call(arg) === objectTag;
};

exports.isObject = isObject;

var isMap = function isMap(arg) {
  return Object.prototype.toString.call(arg) === mapTag;
};

exports.isMap = isMap;

var isSet = function isSet(arg) {
  return Object.prototype.toString.call(arg) === setTag;
};

exports.isSet = isSet;

var isFunction = function isFunction(arg) {
  return Object.prototype.toString.call(arg) === functionTag;
};

exports.isFunction = isFunction;

var isUndefined = function isUndefined(arg) {
  return Object.prototype.toString.call(arg) === undefinedTag;
};

exports.isUndefined = isUndefined;

var isNull = function isNull(arg) {
  return Object.prototype.toString.call(arg) === nullTag;
};

exports.isNull = isNull;

var isNil = function isNil(arg) {
  return isUndefined(arg) || isNull(arg);
};

exports.isNil = isNil;

var isBool = function isBool(arg) {
  return Object.prototype.toString.call(arg) === boolTag;
};

exports.isBool = isBool;

var isDate = function isDate(arg) {
  return Object.prototype.toString.call(arg) === dateTag;
};

exports.isDate = isDate;

var isError = function isError(arg) {
  return Object.prototype.toString.call(arg) === errorTag;
};

exports.isError = isError;

var isNumber = function isNumber(arg) {
  return Object.prototype.toString.call(arg) === numberTag;
};

exports.isNumber = isNumber;

var isRegexp = function isRegexp(arg) {
  return Object.prototype.toString.call(arg) === regexpTag;
};

exports.isRegexp = isRegexp;

var isString = function isString(arg) {
  return Object.prototype.toString.call(arg) === stringTag;
};

exports.isString = isString;

var isSymbol = function isSymbol(arg) {
  return Object.prototype.toString.call(arg) === symbolTag;
};

exports.isSymbol = isSymbol;