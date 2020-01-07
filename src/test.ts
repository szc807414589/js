interface Test {
    name: string,
    age: string
}

function fun(arg1: string, arg2: 'a' | 'b', arg3: Test) {

}

fun('1', 'a', {name: '1', age: '2'});
