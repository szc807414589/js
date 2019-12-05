#实际开发或者面试中遇到的 js 问题
### String

* str.concat()
        
        let a = '123'
        let b = '456'
        let c = a.concat(b)
        console.log(c) //123456
        
* str.indexOf()

        let i = 'qwerasd'.indexOf('a')
        let n = 'qwerasd'.indexOf('z')
        console.log(i) // 4
        console.log(n) // -1
        
* str.charAt()

        字符串中第一个字符的下标是 0。
        如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。
        let a = 'qwerasd'
        console.log(a.charAt(1)) // 'w'
        console.log(a.charAt(100)) // ''
        
* str.lastIndexOf()

        返回字符串中一个子串最后一处出现的索引（从右到左搜索），如果没有匹配项，返回 -1
        let a = 'qwerasd'
        console.log(a.lastIndexOf(1))//-1
        console.log(a.lastIndexOf('a'))//4
        
* str.substring()

        str.substring(start,end)//end不传默认到结尾 不能传负数
        
* str.substr()

        str.substr(start,length) //length不传默认到结尾 
        ECMAscript 没有对该方法进行标准化，因此反对使用它。
        
* str.replace()

        str.replace(regexp/substr,replacement)//替换
        
* search 

        stringObject.search(regexp)
        stringObject 中第一个与 regexp 相匹配的子串的起始位置。
        注释：如果没有找到任何匹配的子串，则返回 -1。
        
* match

        如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。
        如果没有找到任何匹配的文本， match() 将返回 null。否则，它将返回一个数组，
        其中存放了与它找到的匹配文本有关的信息。该数组的第 0 个元素存放的是匹配文本，
        而其余的元素存放的是与正则表达式的子表达式匹配的文本。除了这些常规的数组元素之外，
        返回的数组还含有两个对象属性。index 属性声明的是匹配文本的起始字符在 
        stringObject 中的位置，input 属性声明的是对 stringObject 的引用。
        
        如果 regexp 具有标志 g，则 match() 方法将执行全局检索，找到 stringObject 
        中的所有匹配子字符串。若没有找到任何匹配的子串，则返回 null。如果找到了一个或多个匹配子串，
        则返回一个数组。不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 
        stringObject 中所有的匹配子串，而且也没有 index 属性或 input 属性。
        
        let a = 'qwerasdqw'
        console.log(a.match(/\qw+/))
        //[ 'qw', index: 0, input: 'qwerasdqw', groups: undefined ]
        console.log(a.match(/\qw+/g))
        //[ 'qw', 'qw' ]

* slice
        
        字符串截取
        let a = 'qwerasd'
        console.log(a.slice(0, 1))//'q'
        console.log(a.slice(-1))//'d'
        console.log(a.slice(-4, -2))//'ra'
        
        
* split

        字符串分割成字符串数组
        stringObject.split(separator,howmany)
        separator:字符串或正则表达式，从该参数指定的地方分割 stringObject。
        howmany:可选。该参数可指定返回的数组的最大长度。
                如果设置了该参数，返回的子串不会多于这个参数指定的数组。
                如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
        console.log(a.split(' ',1))//['qwerasd']
        console.log(a.split('',2))//['q', 'w']
        console.log(a.split('',3))//['q', 'w', 'e']

### Array

* 判断是否是数组
    
        Object.prototype.toString.call(array) === ‘[object Array]’;
* push()和concat()

        push()是在原数组的基础上修改的，执行push()方法后原数组的值也会变,并返回新的长度；
        concat()是先把原数组复制到一个新的数组，然后在新数组上进行操作，所以不会改变原数组的值。
        如果参数不是数组，
            不管参数个数有多少个，push()和concat()都会直接把参数添加到数组后；
        如果参数是一个数组，  
            push()就会直接把数组添加到原数组后，
            而concat()会把数组里的值取出来添加到原数组后。
* pop()

        将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。
        如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。
* shift()
        
        把数组的第一个元素从其中删除，并返回第一个元素的值。
        如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值
* unshift(1)
        
        向数组的开头添加一个或更多元素，并返回新的长度。
        如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值
* join(separator)
        
        把数组中的所有元素放入一个字符串。
        separator 指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符
* toString()
        
        把数组转换为字符串，并返回结果。返回值与没有参数的 join() 方法返回的字符串相同。
* slice()
        
        切割数组,返回新数组
* splice(index,howMany,item1,.....,itemX)
        
        从数组中添加/删除项目，然后返回被删除的项目。
        item1,.....,itemX可选,是向数组中添加的元素
* sort()
        
        按照ASCII码进行排序
        const compare = function (x, y) {//比较函数
        	if (x < y) {
        		return -1;
        	} else if (x > y) {
        		return 1;
        	} else {
        		return 0;
        	}
        }
        arr.sort(compare)
### Object

* 防抖和节流
        
        防抖:动作绑定事件，动作发生后一定时间后触发事件，
            在这段时间内，如果该动作又发生，则重新等待一定时间再触发事件。
        function debounce(func, time) {
            let timer = null;
            return () => {
              clearTimeout(timer);
              timer = setTimeout(()=> {
                func.apply(this, arguments)
              }, time);
            }
        }
        节流:动作绑定事件，动作发生后一段时间后触发事件，
            在这段时间内，如果动作又发生，则无视该动作，直到事件执行完后，才能重新触发。
        function throtte(func, time) {
            let activeTime = 0
            return () => {
                const current = Date.now()
                if(current - activeTime > time){
                    func.apply(this, time)
                    activeTime = Date.now()
                }
            }
        }
