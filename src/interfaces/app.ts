interface NamedPerson{ // interface tells an object or parameter it has to have all the parameter defined in interface
    firstName: string;
    age?: number; //optional perameter
    [propName: string]: any; //if you don't know the name of passing variable use this syntax to skip nae checks
    greet(lastName: string): void;
}
function greet(person: NamedPerson) //takes person object which need to have NamedPerson interface and other then that
{
    console.log("Hello "+ person.firstName);
};

function ChangeName(person: NamedPerson): void{
    person.firstName = "Dcoder";
};

const Per = {
    firstName: "Daksh", //FirstName: "daksh" give error
    hobbies: ["sports", "coding"],
    greet(lastName: string){
        console.log("Hi, I am "+ this.firstName +" "+ lastName);
    }
};
//greet({firstName: "daksh", age : 40});
greet(Per); //passing per object without optional age property
ChangeName(Per);
greet(Per);
Per.greet("Lohar");

class Person12 implements NamedPerson{
    firstName: string = "";
    greet(lastName: string): void{
        console.log("Hi, I am "+ this.firstName +" "+ lastName);
    }
    lastName: string = ""; //property not defined in interface
}

const myPerson = new Person12();
myPerson.firstName = "D CODER";
myPerson.greet("Pro");
myPerson.greet(myPerson.lastName);

//Function Types

interface DoubleValueFunc{
    (number1: number, number2: number): number; // fixing that what ever we have of this type would be a function
}

let myDoubleFunction: DoubleValueFunc; // variable which implements the interface and it need to be a function
//assigning function with interface requsites
myDoubleFunction = function(Value1: number, Value2: number): number{
    return (Value1 + Value2) +2;
}
// give error myDoubleFunction = function(Value1: string, Value2: number): number{
//     return (Value1 + Value2) +2;
// }
console.log(myDoubleFunction(2,3.4));

// interfaces Inheritance
interface AgedPerson extends NamedPerson{
    age: number;
}

const oldPerson: AgedPerson= {
    age: 27, //now age is not optional
    firstName: "Daksh", //things require in NamedPerson
    greet(lastName: string){
        console.log("Hello");
    }
};
console.log(oldPerson);

