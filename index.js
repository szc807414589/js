// let a = 'qwerasd'
// let b = [14, 22, 3, 8,-1,-2,100]
// let a = ['1','2','3'].map(parseInt)
// console.log(a)
// let a = '123'
// let b = '456'
// let c = a.concat(b)
// console.log(c) //123456
// let i = 'qwerasd'.indexOf('a')
// let n = 'qwerasd'.indexOf('z')
// console.log(i) // 4
// console.log(n) // -1
// console.log(a.charAt(1)) //'w'
// console.log(a.charAt(100)) //''
// console.log(a.charAt(-1)) //''
// console.log(a.lastIndexOf(1))//-1
// console.log(a.lastIndexOf('a'))//4
// console.log(a.search(/\qw+/))
// console.log(a.search(/\qw+/g))
// console.log(a.split(''))//['q', 'w', 'e', 'r', 'a', 's', 'd']
// console.log(a.split(' ',1))//['qwerasd']
// console.log(a.split('',2))//['q', 'w']
// console.log(a.split('',3))//['q', 'w', 'e']
// console.log(a.split('e'))//[ 'qw', 'rasd' ]
// console.log(a.split('e',2))//'ra'
// let c= b.concat(5,6,'12',[0,9,8])

// const compare = function (x, y) {//比较函数
// 	if (x < y) {
// 		return -1
// 	} else if (x > y) {
// 		return 1
// 	} else {
// 		return 0
// 	}
// }
// console.log(b.sort(compare))
// console.log(b)

// console.log(c)
/*//比较相邻的元素。如果第一个比第二个大，就交换他们两个位置。
function sorts(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				//交换位置
				let temp = arr[j]
				arr[j + 1] = arr[j]
				arr[j] = temp
			}
		}
	}
	console.log(arr)
	return arr
}

function sortArray(arr) {
	for (let j = 0; j < arr.length - 1; j++) {
		// 两两比较，如果前一个比后一个大，则交换位置。     
		for (let i = 0; i < arr.length - 1 - j; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
			}
		}
	}
	// console.log(arr)
}


sortArray(b)
// sorts(b)
console.log(b)*/


/*let arr = ["a", "b", "c"];
let obj = { foo: "bar", baz: 42 };
let ArrayLike = { 0 : "a", 1 : "b", 2 : "c"};

console.log(Object.keys(arr))         // ['0', '1', '2']
console.log(Object.keys(obj))         // ["foo","baz"]
console.log(Object.keys(ArrayLike))  // ['0', '1', '2']*/

// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
// let as = Array.from(new Set(arr.flat(Infinity)))
// console.log(arr.flat(Infinity))

function foo() {

}
var f = new foo()
f.name='1'
console.log(foo.prototype)
