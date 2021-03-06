//类型检查
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';

const nullTag = '[object Null]';
const undefinedTag = '[object Undefined]';
const functionTag = '[object Function]';
const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const numberTag = '[object Number]';
const regexpTag = '[object RegExp]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';

export const isArray = arg => Object.prototype.toString.call(arg) === arrayTag;
export const isObject = arg => Object.prototype.toString.call(arg) === objectTag;
export const isMap = arg => Object.prototype.toString.call(arg) === mapTag;
export const isSet = arg => Object.prototype.toString.call(arg) === setTag;
export const isFunction = (arg) => Object.prototype.toString.call(arg) === functionTag;
export const isUndefined = (arg) => Object.prototype.toString.call(arg) === undefinedTag;
export const isNull = (arg) => Object.prototype.toString.call(arg) === nullTag;
export const isNil = (arg) => isUndefined(arg) || isNull(arg);
export const isBool = arg => Object.prototype.toString.call(arg) === boolTag;
export const isDate = arg => Object.prototype.toString.call(arg) === dateTag;
export const isError = arg => Object.prototype.toString.call(arg) === errorTag;
export const isNumber = arg => Object.prototype.toString.call(arg) === numberTag;
export const isRegexp = arg => Object.prototype.toString.call(arg) === regexpTag;
export const isString = arg => Object.prototype.toString.call(arg) === stringTag;
export const isSymbol = arg => Object.prototype.toString.call(arg) === symbolTag;
