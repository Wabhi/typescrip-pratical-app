let numberArray: number[] = [1,2,4,5];
let stringArray: string[] = ['fjf','klk','bnb']
let booleanArray:boolean[] =[true,false,false,true]

let arr1: Array<string> =['ji','jo','kd']
let arr2: Array<number> = [1,2.3,4];
let arr3: Array<bolean> = [true,false,false,true];

//generics with functions................................................................
//we want to create a function which accept any type of and retutn same as well

//1. approach................................................................

function createFunctionForString(args: string):string {
return args;
}
function createFunctionForNumber(args: number): number {
  return args;
}
//same for boolean so here we can make a generic function....

function createGenericFunc <T>(args: T) : T{
return args;
}

const r1 = createGenericFunc<string>('hi i am hre')
const r2 = createGenericFunc<number>(100000);
const r3 = createGenericFunc<boolean>(true);

//generic with interface................................................................

interface GenericInterface<T>{
  value:T,
  getValue:()=>T;
}

const genericInterface1: GenericInterface<string> = {
    value:'Helow',
    getValue(){
        return this.value;
    }
}
const genericInterface2: GenericInterface<number> = {
  value: 12345,
  getValue() {
    return this.value;
  },
};
const genericInterface3: GenericInterface<boolean> = {
  value: true,
  getValue() {
    return this.value;
  },
};


//fetching data from api with diffrent types of data types.
// async function getDat(data:string):string {
//     return "hi ! data"
// }

async function getData1(): Promise<string> {
  return ';jiisik'
}
async function getData2(): Promise<number> {
  return 2222;
}

function createArray<T>(length:number,value:T):Array<T> {
let result:T[]=[]
result = Array(length).fill(value)
return result;
}
const ca1 =createArray<string>(3,'hi ! data')
const ca2 =createArray<number>(4,12334)

console.log(ca1,ca2)

function genericFunctionForPair<T,U>(params1:T,params2:U):[T, U] {
  return [params1, params2]
}

const pair1 = genericFunctionForPair('Hello','world')
const pair2 = genericFunctionForPair(234,445);
const pair3 = genericFunctionForPair("Hello", 853);
const pair4 = genericFunctionForPair(113, "world");
const pair5 = genericFunctionForPair(true, "world");
const pair6 = genericFunctionForPair(1, false);

console.log("pair1.................",pair1);
console.log("pair2..................",pair2);
console.log("pair3...................",pair3);
console.log("pair4................",pair4);
console.log("pair5................",pair5);
console.log("pair6...................",pair6);


//generics process...

function processFunctionValue<T extends string |number>(value: T):T{
   console.log(value);
   return value;
}
processFunctionValue('fjfjgj')
processFunctionValue(3757557)


