//strings
let myName: string = 'Max';


//numbers
let myAge: number = 27; //or 27.45 it is also of type number

//booolean
let hasHobbies: boolean = false;


//assign types
//let myRealAge; //it has type of 'any'
let myRealAge: number;
myRealAge = 27;


//array
let hobbies: any[] = ['Cricket', 'Sports']
console.log(typeof hobbies);
// allowed in this  case hobbies = [100,200] 

let hobbies1: string[] = ['Cricket', 'Sports']
console.log(typeof hobbies1);
// not allowed in this  case hobbies = [100,200] 


//tuples is mixed type array
let address: [string, number] = ["51 Street", 99]; //restricing that first number will be string and second number.


// enum, feature to make number more expressive

enum Color {
	Gray, //0
	Green = 100, //100
	Blue //101
};

let myColor: Color = Color.Green;

console.log(myColor);

myColor = Color.Blue;

console.log(myColor);


// any
let car: any = "BMW";
console.log(car);

car = {brand: "BMW", series: 3};
console.log(car);


//functions
function returnMyName(): string { // the return type is fixed
	return myName;
}

console.log(returnMyName());

//void 
function sayHello(): void{
	console.log("Hello");
}

//argument types fixing the type of args
function multiply(val1: number, val2: number): number{
	return val1 * val2;
}

//function types

let myMultiply: ( val1: number, val2: number ) => number; //fixing the type of variable  
//which type of functions it can store according to arguments and return type

// give error myMultiply = sayHello;
//myMultiply();
myMultiply = multiply; //best match for myMultiply
console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
	name: "Daksh", //string type
	age: 19 //number type
};

// give error userData = {};
// give error userData = {
//	a: "Hello",
//	b: 22
// };

//complex type mixins of everything
let complex: { data: number[], output: (all : boolean) => number[] } = {
	data: [100, 3.99, 10],
	output: function(all : boolean): number[]{
		return this.data;
	}
};

// give error complex = {};

//type alias

type Complex = { data: number[], output: (all : boolean) => number[] };

let complex2: Complex= {
	data: [100, 3.99, 10],
	output: function(all : boolean): number[]{
		return this.data;
	}
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
myRealRealAge = 27;
// give error myRealRealAge = true;

// check types

let finalValue = "A String";
if (typeof finalValue == "string"){
	console.log("Final value is string");
}

// never type

function neverReturns(): never{
	throw new Error('An error');
}

//Nullable type
let canBeNull = 12;
// give error if strict null check is true canBeNull = null;
let canAlsoBeNull;
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

class Person{
	name: string;
	private type: string = "";
	protected age: number = NaN;
	constructor(name: string, public userName: string){// it will create userName property in class with public access sepcifier
		this.name = name;
	}

	printAge(): void{
		console.log(this.age);
		this.setType("old coder");
	}
	private setType(type: string): void{
		this.type = type;
		console.log(this.type);
	}
}
const person = new Person("Daksh lohar", "Pro-D-Coder");
console.log(person); 

var person1 = new Person("Daksh lohar", "Pro-D-Coder");
console.log(person);

class daksh extends Person{
    //name = "Daksh";
    constructor(userName: string, age: number) {
        super("Daksh", userName);
		this.age = age;
    }
}

const d = new daksh("dcoder", 19);
console.log(d);

// Getters and setters

class Plant{
	private _species: string = "";
	
	set species(value: string){
		if(value.length>3){
			this._species = value;
		}
		else{
			this._species = "Default";
		}
	}

	get species(){
		return this._species;
	}
}

let plant = new Plant();
console.log(plant.species);
plant.species = "green plant";
console.log(plant.species);

// Static Properties & method

class Helpers{
	static PI: number = 3.14;
	static calcCircum(diameter:number){
		return this.PI * diameter;
	}
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(8));

//Abstract classes

abstract class Project{
	projectName: string = "";
	budget: number = 10000;

	abstract changeName(name: string): void;

	calcBudget(): number{
		return this.budget *2;	
	}
}

class ITProject extends Project{
	changeName(name: string): void{
		this.projectName = name;
	}
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT project");
console.log(newProject);
