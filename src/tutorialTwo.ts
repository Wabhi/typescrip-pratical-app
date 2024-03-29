const person1 :{name :string,email :string,address :string,company :string} ={
    name: 'John 1',
    email: 'john1@example.com',
    address: 'John Street, 123',
    company: 'Google Inc1'
}

const person2: {
  name: string;
  email: string;
  address: string;
  company: string;
} = {
  name: "John 2",
  email: "john2@example.com",
  address: "John Street, 1234",
  company: "Google Inc2",
};

console.log(person1)
console.log(person2)


//if we want to group a items with same type annotation

const books ={name:'book1',cast:30,}
const pens ={name:'book2',cast:40,}
const papers ={name:'book3'}

const items:{readonly name:string,cast?:number}[] =[books,pens,papers];
//items[0].name = 'book32';  //can't assign a name because it's readonly.

let phone:{brand:string,cast:number} ={brand:'iphone',cast:450000}
//phone.cast ='4550000'

let laptop:{brand:string,cast:number} ={brand:'hp',cast:550000}
// let laptop2: { brand: string; cast: number } = { brand: "hp" };

let product1 = {name:'jeans',price:2283}
let product2 = {name:'shirts',}
let products:{name:string,price?:number}[] =[product1,product2]

function sayHi(name:string){
  console.log(`hi ${name}`)
}

sayHi('abhishek')
//sayHi(3)

// function calculateSum(a:number):number {
//     let hasSum = true
//     if(hasSum) {
//         return "it has summ....."
//     }
//     return a+10
// }
// calculateSum(10)
// calculateSum('fhfh')

function addThree(number:any){
    let newNumber :number = 3
    return number + newNumber
}

const result = addThree(3)
const newResult =result
//newResult.myValue()

const namelist:string[] =['abhishek','avinash','ankur','rakesh']

function nameIntheList(name:string):boolean{
    return namelist.includes(name)
}

if (nameIntheList("abhishek")) {
  console.log("abhishek is in the name list");
} else {
  console.log("abhishek is not in the name list");
}

//optional parameter......
function calculateDiscount(amount:number,discount?:number):number{
    return amount-(discount||0)
}
console.log("calculateDiscount .....", calculateDiscount(2000,1000))
console.log("calculateDiscount .....", calculateDiscount(2000));

//default parameter.......
function calculateScore(score:number,penalty:number= 0):number{
    return score-penalty
}

console.log("calculateScore .....", calculateScore(85,45))
console.log("calculateScore .....", calculateScore(85));

function sumOfNumbers(message:string,...numbers:number[]):string{
 const double = numbers.map((item)=>item*2)
 //console.log(double);
 //return double;
 const totalSum = numbers.reduce((acc,curr)=>{
     return acc+curr
 },0)
 return `${message} ${totalSum}`
}

console.log(sumOfNumbers('the sum of total numbers is ',1,2,4,5,6,7,8,9))

//type gaurd
// function processInput(input:string|number){

//   return input*2  //it will throw error
// }
// processInput(10)
// processInput('abhishek')
function processInput(input:string|number){
  if(typeof input === 'string'){
    console.log(input.toUpperCase())
  }else{
    console.log(input*100)
  }
}
processInput(10)
processInput('abhishek')


function createEmployee({id}:{id:number}):{id:number,isActive:boolean}{
  return {id:id,isActive:id%2==0}
}

const emp1 = createEmployee({id:1})
const emp2 = createEmployee({id:2})
console.log(emp1,emp2)

//alternative of above.
function createStudent(student:{name:string,id:number}):void{
    console.log(`welcome to course ${student.name}`)
}

const s1 = {
    name: 'abhishek',
    id:111
}
createStudent(s1)
// createStudent({
//   name: "abhishek",
//   id: 111,
//   email: "abhishek@gmail.com"
// });

function processGivenInput(input: string| number, config:{ reverse:boolean }={reverse:false}):string|number{
    if(typeof input === 'number'){
        return input*10000
    }else{
        return  config.reverse ? input.split('').reverse().join(''): input;
    }

}

console.log(processGivenInput(10))
console.log(processGivenInput('abhishek'));
console.log(processGivenInput("abhishek",{reverse:true}));

