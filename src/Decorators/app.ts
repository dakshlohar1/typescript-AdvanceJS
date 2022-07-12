// class decorator
function logged(constructorFn: Function){ //decorators always take class constructor as aargument for class decorators
    console.log(constructorFn);
}

@logged
class Person1{
    constructor(){
        console.log("HI There");
    }
}
//Factory
function logging(value: boolean): any{
    return value ? logged : null;
}

@logging(true)
class Car{
}


//Advanced
function printable(constructorFn: Function){
    constructorFn.prototype.print = function(){
        console.log(this);
    }
}

@logging(false)
@printable
class Plant1{
    name = "Green Plant";
}
const plant1  = new Plant1();
(<any>plant1).print();

//Method Decorators and  property decorator
function editable(value: boolean){
    return function(target: any, propName: string, descriptor: PropertyDescriptor){ //method decorators takes three args.
        descriptor.writable = value; // a target of type any, propName and descriptor of type PropertyDescriptor
    }
}
function overwritable(value: boolean){
    return function(target: any, PropName: string): any{
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
    }
}

class Project1{
    //@overwritable(false) //check for that
    @overwritable(true)
    projectName: string;
    
    constructor(name: string){
        this.projectName = name;
    }
    @editable(true)
    calcBudget(): void{
        console.log(1000);
    }
}

const project  = new Project1("Super Project");
project.calcBudget();
project.calcBudget = function(){//gives error if @editable is false
    console.log(2000);
};
project.calcBudget();

//parameter Decorator

function printInfo(target: any, methodName: string, paramIndex: number){
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course{
    name: string;
    constructor(name: string){
        this.name = name;
    }

    printStudentNumber(mode: string, @printInfo printAll: boolean){
        if(printAll){
            console.log(10000);
        }
        else{
            console.log(2000);
        }
    }
}
const course = new Course("Super course");
course.printStudentNumber("anythiing", true);
course.printStudentNumber("anything", false);