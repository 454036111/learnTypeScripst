console.log(greetNamed("张三"))


function greetNamed(name : string): string {
    if (name) {
        return " Hi! " + name;
    }
    return "empty";
}

var greetUnnamed = function (name: string) : string {
    if (name) {
        return "Hi! " + name;
    }
    return "empty";
}
console.log(greetUnnamed("李四"));

var greetName2 : (name: string) => string;
greetName2 = function (name: string): string {
    return "this is greetName2"
}

//与可选参数的函数
function add(foo: number, bar: number, foobar: number): number {
    return foo + bar + foobar;
}

function add_optionals (foo: number, bar: number, foobar?: number): number {
    var result = foo + bar;
    if (foobar !== undefined) {
        result += foobar;
    }
    return result;
}

//有默认参数的函数
function add_defaultNumber (foo: number, bar?: number, foobar: number = 0): number {
    return foo + foobar;
}

//有剩余参数的函数


