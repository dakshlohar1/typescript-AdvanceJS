//simple generic
function echo(data: any): any{ 
    return data; //here we don't know which type of data we are getting
}
console.log(echo("Daksh"));
console.log(echo(45).length); //does not give error
console.log(echo({age: 29, name: "Daksh"}));

//Better Generic

function betterEcho<T>(data: T){ //it could be any character other than T.
    return data;  //here we use (<>) to aggign which type of data we are receiving and than assign it to T.
}

console.log(betterEcho("Daksh"));
// console.log(betterEcho(45).length); //give error
console.log(betterEcho<number>(45));//defining expliclitly we are sending number
console.log(betterEcho({age: 29, name: "Daksh"}));

//Built-in Generics
const testResults: Array<number> = [1.94, 2.33]; //array is generic type by defualt
testResults.push(-2.33);//works
//testResults.push("s")//error

//Arrays
function printAll<T>(args: T[]){ //receive array type of T
    args.forEach((element) => console.log(element))
}

printAll<string>(["Apple", "Banana"]);

//Generic types
const echo2: <T>(data: T) => T = betterEcho; //defining a generic variable which takes a function
//after : and before = the syntax is used for function type defination
//echo2 is a variable which is generic because of <T>
//and echo2 takes function with this restrictions (data: T) => T take T type argu. and return T type argu
//At end betterEcho the value of echo2 the function which return same type and take same type.

//Generic Classes
class SimpleMath<T extends number | string>{ // adding constraint to T that this type of type is allow after extends
    baseValue: T;//simpleMath allows object with number and string generic 
    multiplyValue: T;

    constructor(baseValue: T, multiplyValue: T){
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }

    calculate(): number{
        return +this.baseValue * +this.multiplyValue; //+ sign for typecasting
    }
}

const simpleMathNum = new SimpleMath<number>(10,20) //this object takes number only allowable by SimpleMath class
console.log(simpleMathNum.calculate());
const simpleMathStr = new SimpleMath<string>("10","20") //this object takes string only allowable by SimpleMath class
console.log(simpleMathStr.calculate());

//multiple generic
class SimpleMathMulti<T extends number | string, U extends number | string>{
    baseValue: T; 
    multiplyValue: U;

    constructor(baseValue: T, multiplyValue: U){
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }

    calculate(): number{
        return +this.baseValue * +this.multiplyValue; //+ sign for typecasting
    }
}

const simpleMathMulti = new SimpleMathMulti<string, number>("10",20) 
console.log(simpleMathMulti.calculate());
