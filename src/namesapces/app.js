"use strict";
/// <reference path = "circleMath.ts"/> 
/// <reference path = "rectangleMath.ts"/> 
// referencing the namespaces file and than type tsc app.ts --outFile app.js the entry point file for whole app.
var CircleMath = MyMath.Circle;
var PI = 2.90;
console.log(MyMath.calculateRectangle(10, 20)); //MyMath the namespace name
console.log(CircleMath.calculateCircum(10));
console.log(PI);
