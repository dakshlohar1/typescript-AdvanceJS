"use strict";
function greet(person) {
    console.log("Hello " + person.firstName);
}
;
function ChangeName(person) {
    person.firstName = "Dcoder";
}
;
var Per = {
    firstName: "Daksh",
    hobbies: ["sports", "coding"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
//greet({firstName: "daksh", age : 40});
greet(Per); //passing per object without optional age property
ChangeName(Per);
greet(Per);
Per.greet("Lohar");
var Person12 = /** @class */ (function () {
    function Person12() {
        this.firstName = "";
        this.lastName = ""; //property not defined in interface
    }
    Person12.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person12;
}());
var myPerson = new Person12();
myPerson.firstName = "D CODER";
myPerson.greet("Pro");
myPerson.greet(myPerson.lastName);
var myDoubleFunction; // variable which implements the interface and it need to be a function
//assigning function with interface requsites
myDoubleFunction = function (Value1, Value2) {
    return (Value1 + Value2) + 2;
};
// give error myDoubleFunction = function(Value1: string, Value2: number): number{
//     return (Value1 + Value2) +2;
// }
console.log(myDoubleFunction(2, 3.4));
var oldPerson = {
    age: 27,
    firstName: "Daksh",
    greet: function (lastName) {
        console.log("Hello");
    }
};
console.log(oldPerson);
