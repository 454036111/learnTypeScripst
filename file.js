"use strict";
console.log(greetNamed("张三"));
function greetNamed(name) {
    if (name) {
        return " Hi! " + name;
    }
    return "empty";
}
var greetUnnamed = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    return "empty";
};
console.log(greetUnnamed("李四"));
