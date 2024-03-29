type User = {
  id: number;
  name: string;
  isActive: boolean;
};
const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User):User{
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}
createUser({name:'abhishek',id:2,isActive:true})


type saySomething = "HII" | "hello" | 'bye'
let greeting : saySomething;
greeting ="bye"
greeting ="HII"
//greeting ="helloooooo" // will give error  as it is not in the defined type of saySomething

type Theme = "dark" | "light" | "dimm"
let theme : Theme

theme = "dark"
theme = "light"
theme = "dimm"

function setTheme(t: Theme){
    theme = t
}

setTheme('dimm')
setTheme('light')


//using type alias................................................................

type Employee ={id:number,name:string,department:string}
type Manager ={id:number,name:string,employees:Employee[]}

type Staff = Employee | Manager

function printStaffDetails(staff: Staff){
    if("employees" in staff){
         console.log(`the manager id ${staff.id} is ${staff.name} and he is calling for ${staff.employees.length} of people for resolving bugs`)
    
    }else{
        console.log(`the employee id ${staff.id} is ${staff.name} and he is from ${staff.department}`)
    }

}

const abhishek:Employee ={id:111,name:'Abhishek Tiwari', department:"FE"}
const avinash :Employee ={id:222,name:'Avinash Kumar',department:"BE"}

const rakesh: Manager={id:333,name:"Rakesh Thakur",employees:[abhishek,avinash]}

printStaffDetails(abhishek)
printStaffDetails(rakesh)
printStaffDetails(avinash)


type Book ={
    id: number,
    name: string,
    price: number,
}

type DiscountBook = Book & {discount: number}

const book1:Book ={
    id: 101,
    name: 'Book 1',
    price: 100
}

 const book2:Book={
    id:102,
    name:'Book 2',
    price:200
 }

 const discountBook1:Book &{discount:number} ={    //intersection
    id:103,
    name:'Book 3',
    price:300,
    discount:78
 }
 const discountBook2: DiscountBook = { //intersection
   id: 103,
   name: "Book 3",
   price: 300,
   discount: 78,
 };

 const PropType ="age"
 type Animal ={
    [PropType]:number
 }
const Tiger : Animal = {[PropType]:56}


 //using interface................................................................
 //allows to setup shape for object (only object)
 //interface is used when we want to define the  structure of an object but not its values.
//we can use it with class or with simple objects

interface Boook {
    readonly isbn:number,
    title:string,
    author:string,
    gerne?:string,
    //methos
    printBookDeatils():void,
    printMessage(message:string):string
    //property
    printSomething:(value:number)=>number,
}

const deepWork : Boook={
    isbn:292,
    title:'Deep Work',
    author:'Deep newport',
    gerne:'self-help',
    printBookDeatils(){
        console.log(`the book details are : ${this.title} ${this.author} ${this.gerne}`);
    },
    printMessage(message) {
        return `The message from the book is : ${message} - ${this.title}`;
    },
    printSomething:function(value){
        return value+20;
    }
}
deepWork.printBookDeatils()
console.log(deepWork.printMessage('this is awesome book name is : '))
console.log(deepWork.printSomething(450))
//deepWork.isbn=484843  // it readonly value we can't change.


interface Computer{
    readonly id:number,
    brand:string,
    ram:number,
    upgradeRam:(increment:number)=>number,
    storage?:number
}

const laptopp : Computer ={
    id:44848,
    brand:'macbook pro',
    ram:8,
    upgradeRam(number){
        this.ram+=number
        return this.ram
    },  
}

laptopp.storage =256
console.log(laptopp)
laptopp.upgradeRam(16)
console.log(laptopp)


//extending iterface and using type gaurd in interface

interface Person{
    personName:string,
    getPersonDetails:()=>void
}

interface DogOwner{
    dogName:string,
    getDogDetails:()=>void
}

interface Person{
    age:number,
}

interface Employeee extends Person{
    employeeId:number
}

const person : Person={
    personName: 'John Doe',
    age:56,
    getPersonDetails(){
       return `the details of person : ${this.personName} ${this.age}`
    }
}


const employee: Employeee = {
  personName: "abhishek tiwari",
  age: 34,
  employeeId:4558,
  getPersonDetails(){
     return `the details of employee : ${this.employeeId}`
  }
};

interface Managerr extends Person,DogOwner{
    managePeople:()=>void
}


const manager:Managerr = {
   personName: "Ronald McDonald",
   age:56,
   dogName:'rexa',
   managePeople() {
       console.log('Managing people by : ', this.personName);
   },
   getPersonDetails(){
    console.log('the person details : ', this.personName, this.age);
   },
   getDogDetails() {
       console.log(`The owner's Dog is : ${this.dogName}`);
   },
}

manager.managePeople()
manager.getPersonDetails()
manager.getDogDetails()

// console.log(person.getPersonDetails())
// console.log(employee.getPersonDetails())




interface Persone{
    personeName: string
}

interface DogOwnerr extends Persone{
    dogName: string
}

interface Managre extends Persone{
    managePeople:()=>void;
    delegeateTask:()=>void
}

function getEmployeee():Persone | DogOwnerr | Managre {
    const random = Math.random()
    if(random<0.33){
        return {
            personeName:"John Doe",
        }
    }else if(random<0.66){
        return{
            personeName:'John Mike',
            dogName:'rosy'
        }
    }else{
        return{
            personeName:'Abhishek tiwari',
            managePeople(){
                console.log('managing pepople.......')
            },
            delegeateTask() {
                console.log("delegating task.....")
            },
        }
    }
}

const employeee : Persone | DogOwnerr | Managre  = getEmployeee();

console.log(employee)

function isManager(obj: Persone | DogOwnerr | Managre) : obj is Manager {
    return "managePeople" in obj
}

// if(isManager(employeee)){
//     employeee.delegeateTask();
// }

//console.log(employee.delegeateTask())


//difference between type alias and interface................................................................
//1.
//type alias can repersent the premitive types, uniou types, intersect types, literal types and tuple etc. but
//interface is used for shape of object.
//2.
//interface is used for merging  multiple interfaces to one interface. if you define the interface with same name or interface
//more than once but you can't do this with type alias.
//3.
//interface can be implemented by class but type alias can't
//type alias can be used computed property but interface can't

