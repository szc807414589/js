"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var Type = _interopRequireWildcard(require("../checkType"));

/*深拷贝
* 分为可继续遍历的数据和不可继续遍历的数据
*
* */
var ArrayClone = function ArrayClone(arg) {
  var clone_arr = [];
  var result = (0, _map["default"])(arg).call(arg, function (v) {
    return DeepClone(v);
  });
  clone_arr.push(result);
  return clone_arr;
};

var ObjectClone = function ObjectClone(arg) {
  var clone_obj = {};

  for (var key in arg) {
    if (arg.hasOwnProperty(key)) {
      clone_obj[key] = DeepClone(arg[key]);
    }
  }

  return clone_obj;
};

var isSimpleData = function isSimpleData(arg) {
  return Type.isBool(arg) || Type.isNil(arg) || Type.isString(arg) || Type.isSymbol(arg);
};

var SimpleClone = function SimpleClone(arg) {
  return arg;
};

var DeepClone = function DeepClone(arg) {
  /**/
  if (isSimpleData(arg)) {
    return SimpleClone(arg);
  }

  if (Type.isArray(arg)) {
    return ArrayClone(arg);
  }

  if (Type.isObject(arg)) {
    return ObjectClone(arg);
  }
};

var target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8],
  empty: null,
  // map,
  // set,
  bool: true,
  // num: new Number(2),
  // str: new String(2),
  symbol: Object((0, _symbol["default"])(1)),
  date: new Date(),
  reg: /\d+/ // error: new Error(),
  // func1: () => {
  // 	console.log('code秘密花园');
  // },
  // func2: function (a, b) {
  // 	return a + b;
  // }

};
var c = DeepClone(target);
console.log(c);