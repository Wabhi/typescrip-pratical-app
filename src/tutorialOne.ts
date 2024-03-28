console.log("Tutorial one............................")
// interface Person{
//     name: string;
//     age: number;
// }

// const person1: Person ={
//   name:'abhishek',
//   age: 40
// }

// console.log(person1)


//types in ts

let myname:string = "person"
myname ="abhishek tiwari"
console.log(myname)
console.log(myname.toUpperCase())
//myname = 2738 //type number is not assigned to type string. 

let amount:number =34646;
amount = 400000;
console.log(amount)
//console.log(amount.toUpperCase()) // property touppercase doesn't exist in type number
//amount ="38383hf" //type string is not assigned to type number. 

let isDoing:boolean = false;
isDoing = true;
console.log(isDoing)
//isDoing =437474 //type number is not assigned to type boolean. 



let schoolName :string = "university institute of technology"
let schoolMarks :number = 543
let isPassOutFromSchool :boolean = false

console.log(schoolName.toUpperCase())
console.log((schoolMarks*100)/600)
isPassOutFromSchool = true
console.log(isPassOutFromSchool ? "yes, passed out" : "no, not passed out")


//these all will give some error because we have declare data type for each but later point of time we
//are assigning value which is not compatible with declared

// schoolMarks="my school marks io 543"
// schoolName=543
// isPassOutFromSchool ="yes"


//union type in typescript to hold  multiple types of values

let tax: number| string= 15
tax = 20
tax = "30%"
console.log(tax)

let requestedStatuses: 'pending'| 'success'| 'failed'= "failed"
requestedStatuses = "success"
requestedStatuses = "failed";
requestedStatuses = "pending";
//requestedStatuses = "processing"; 
//give an error as the type is set to only pending | success | failed

let isSure:any = false
isSure = 456
isSure ="He is not sure"
// these won't be complain about typescript (data type) because we have used any keyword.
// so it allow us to store any kind of value into this variable.

const fruitCollections =['apple', 'orange', 'banana','mango']
let selectedFruits: string | undefined ;
for(let fruit of fruitCollections) {
   if(fruit ==='banaana'){
     selectedFruits = fruit;
   }
}
//selectedFruits = 10 type number is not assignable in  type string | undefined
console.log(selectedFruits)

let disscount: number| string = 20
disscount ="20%"
//disscount=false

let orderStatus : 'proccessing' |'shpping' | 'delivered' = 'proccessing'

orderStatus = "proccessing"
orderStatus = "shpping"
orderStatus = "delivered"
//orderStatus = "pending"


let numberArray1: number[] = [1,2,4,5,6,7,8]
//let numberArray2: number[] = [1, 2, 4, 5, 6, 7, 8,'string'];  //will give error (string)
let stringArray1: string[] = ['a','s','f','g','2']
//let stringArray2: string[] = ["a", "s", "f", "g", "2",100]; //will give error (number)
let numberStringArray1:(string|number)[] = ['a','d','f',100,200,'h','l']
// let numberStringArray2: (string | number)[] = [
//   "a",
//   "d",
//   "f",
//   100,
//   200,
//   "h",
//   "l",
//   false
// ];  //will give error (boolean)


let temp: number[] =[1,2,3]
temp.push(10)
//temp.push('fhfhf')

let humidity :string[] = ['2s','3e','5r']
humidity.push('5kd')
//humidity.push(10)