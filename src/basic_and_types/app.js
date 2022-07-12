"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//strings
var myName = 'Max';
//numbers
var myAge = 27; //or 27.45 it is also of type number
//booolean
var hasHobbies = false;
//assign types
//let myRealAge; //it has type of 'any'
var myRealAge;
myRealAge = 27;
//array
var hobbies = ['Cricket', 'Sports'];
console.log(typeof hobbies);
// allowed in this  case hobbies = [100,200] 
var hobbies1 = ['Cricket', 'Sports'];
console.log(typeof hobbies1);
// not allowed in this  case hobbies = [100,200] 
//tuples is mixed type array
var address = ["51 Street", 99]; //restricing that first number will be string and second number.
// enum, feature to make number more expressive
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //101
})(Color || (Color = {}));
;
var myColor = Color.Green;
console.log(myColor);
myColor = Color.Blue;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void 
function sayHello() {
    console.log("Hello");
}
//argument types fixing the type of args
function multiply(val1, val2) {
    return val1 * val2;
}
//function types
var myMultiply; //fixing the type of variable  
//which type of functions it can store according to arguments and return type
// give error myMultiply = sayHello;
//myMultiply();
myMultiply = multiply; //best match for myMultiply
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: "Daksh",
    age: 19 //number type
};
// give error userData = {};
// give error userData = {
//	a: "Hello",
//	b: 22
// };
//complex type mixins of everything
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
myRealRealAge = 27;
// give error myRealRealAge = true;
// check types
var finalValue = "A String";
if (typeof finalValue == "string") {
    console.log("Final value is string");
}
// never type
function neverReturns() {
    throw new Error('An error');
}
//Nullable type
var canBeNull = 12;
// give error if strict null check is true canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
// type bankType = {money: number, deposite: (val: number) => void};
// let bankAccount: bankType = {
// 	money: 2000,
// 	deposite: function deposite(value: number): void{
// 		this.money += value
// 	}
// };
// let mySelf: { name: string, bankAccount: bankType, hobbies: string[] } = {
// 	name: "Daksh",
// 	bankAccount: bankAccount,
// 	hobbies: ["Sports", "Coding"]
// };
// mySelf.bankAccount.deposite(3000);
// console.log(mySelf);
function controlMe(isTrue, somethingElse) {
    var result; //currently null
    if (isTrue) {
        result = 12;
    }
    result = 33; // if we remove it it gives an error
    return result;
}
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.type = "";
        this.age = NaN;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("old coder");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Daksh lohar", "Pro-D-Coder");
console.log(person);
var person1 = new Person("Daksh lohar", "Pro-D-Coder");
console.log(person);
var daksh = /** @class */ (function (_super) {
    __extends(daksh, _super);
    //name = "Daksh";
    function daksh(userName, age) {
        var _this = _super.call(this, "Daksh", userName) || this;
        _this.age = age;
        return _this;
    }
    return daksh;
}(Person));
var d = new daksh("dcoder", 19);
console.log(d);
// Getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "green plant";
console.log(plant.species);
// Static Properties & method
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircum = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(8));
//Abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "";
        this.budget = 10000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT project");
console.log(newProject);
// private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The one only");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne("The only one");
var right = OnlyOne.getInstance();
console.log(right.name);
// error right.name = 'Something else';
//Exercise 
// class Car{
// 	name: string;
// 	acceleration: number = 0;
// 	constructor(name: string){
// 		this.name = name;
// 	}
// 	honk(): void{
// 		console.log("TOOOOOOOOO!");
// 	}
// 	accelerate(speed: number): void{
// 		this.acceleration = this.acceleration + speed;
// 	}
// }
// const vehical = new Car("BMW");
// vehical.honk();
// console.log(vehical.acceleration);
// vehical.accelerate(30);
// console.log(vehical.acceleration);
//Exercise
// class baseObject{
// 	width: number = 0;
// 	height: number = 0;
// }
// class Rectangle extends baseObject{
// 	calcSize(): number{
// 	return this.width * this.height;
// 	}
// }
// const rect = new Rectangle();
// rect.width = 5;
// rect.height = 10;
// console.log(rect.calcSize());
//Exercise
// class human{
// 	private _firstname: string = "";
// 	set firstname(FirstName: string){
// 		if(FirstName.length > 3){ 
// 			this._firstname = FirstName;
// 		}
// 		else{
// 			this._firstname = "";
// 		}	
// 	}
// 	get firstname(){
// 		return this._firstname;
// 	}
// }
// const person2 = new human();
// console.log(person2.firstname);
// person2.firstname = "D";
// console.log(person2.firstname);
// person2.firstname = "Daksh";
// console.log(person2.firstname);
