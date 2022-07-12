"use strict";
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 20);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem("apples", "10");
stringMap.setItem("bananas", "20");
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
