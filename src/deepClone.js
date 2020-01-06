/*深拷贝
* 分为可继续遍历的数据和不可继续遍历的数据
*
* */
import * as Type from '../checkType';

const ArrayClone = arg => {
	const clone_arr = [];
	const result = arg.map(v => DeepClone(v));
	clone_arr.push(result);
	return clone_arr;
};
const ObjectClone = (arg) => {
	const clone_obj = {};
	for (let key in arg){
		if (arg.hasOwnProperty(key)) {
			clone_obj[key] = DeepClone(arg[key]);
		}
	}
	return clone_obj;
};
const isSimpleData = arg => (
	Type.isBool(arg) ||
	Type.isNil(arg) ||
	Type.isString(arg) ||
	Type.isSymbol(arg)
);
const SimpleClone = arg => arg;
const DeepClone = arg => {
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

const target = {
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
	symbol: Object(Symbol(1)),
	date: new Date(),
	reg: /\d+/,
	// error: new Error(),
	// func1: () => {
	// 	console.log('code秘密花园');
	// },
	// func2: function (a, b) {
	// 	return a + b;
	// }
};
let c = DeepClone(target);
console.log(c);

