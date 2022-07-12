"use strict";
//simple generic
function echo(data) {
    return data; //here we don't know which type of data we are getting
}
console.log(echo("Daksh"));
console.log(echo(45).length); //does not give error
console.log(echo({ age: 29, name: "Daksh" }));
//Better Generic
function betterEcho(data) {
    return data; //here we use (<>) to aggign which type of data we are receiving and than assign it to T.
}
console.log(betterEcho("Daksh"));
// console.log(betterEcho(45).length); //give error
console.log(betterEcho(45)); //defining expliclitly we are sending number
console.log(betterEcho({ age: 29, name: "Daksh" }));
//Built-in Generics
var testResults = [1.94, 2.33]; //array is generic type by defualt
testResults.push(-2.33); //works
//testResults.push("s")//error
//Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
//Generic types
var echo2 = betterEcho; //defining a generic variable which takes a function
//after : and before = the syntax is used for function type defination
//echo2 is a variable which is generic because of <T>
//and echo2 takes function with this restrictions (data: T) => T take T type argu. and return T type argu
//At end betterEcho the value of echo2 the function which return same type and take same type.
//Generic Classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; //+ sign for typecasting
    };
    return SimpleMath;
}());
var simpleMathNum = new SimpleMath(10, 20); //this object takes number only allowable by SimpleMath class
console.log(simpleMathNum.calculate());
var simpleMathStr = new SimpleMath("10", "20"); //this object takes string only allowable by SimpleMath class
console.log(simpleMathStr.calculate());
//multiple generic
var SimpleMathMulti = /** @class */ (function () {
    function SimpleMathMulti(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    SimpleMathMulti.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; //+ sign for typecasting
    };
    return SimpleMathMulti;
}());
var simpleMathMulti = new SimpleMathMulti("10", 20);
console.log(simpleMathMulti.calculate());
