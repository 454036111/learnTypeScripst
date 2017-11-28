"use strict";
var Hello = /** @class */ (function () {
    function Hello(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    Hello.prototype.greeter = function () {
        return "欢迎来到typescript的世界，hello" + this.firstName + " " + this.lastName;
    };
    return Hello;
}());
var user = new Hello("王", "小二");
document.body.innerHTML = user.greeter();
