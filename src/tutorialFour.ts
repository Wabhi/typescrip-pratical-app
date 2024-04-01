console.log("mmmmmmmmmmmm................................")

//tuple................................................................
//can store diffrent types of data in single container/variable

//let person : [string, number,boolean] = [2354,'hello',true] //will give error  if we change the order of data types or add
let man :[string,number] = ['hello',233]
let date :[number,number,number] = [1,2,4]

function getData():[number,string,boolean] {
return [2,'abhi',true]
}

// let resulta :[number,number]=[1,3]
// resulta.push(34)
// resulta.push(46)
// resulta.push(34);
// resulta.push(46);
// resulta.push(34);
// resulta.push(46);

let resulta: readonly [number, number] = [1, 3];
// resulta.push(34);
// resulta.push(46);
// resulta.push(34);
// resulta.push(46);
// resulta.push(34);
// resulta.push(46);

let getdata :[number,string?] = [2]


//enum................................................................
// enum is a user defined data type which consists of predefined values
// it can be used to represent specific names or titles such as days of the week , directions

enum ServerResponseStatus{
    SUCCESS=200,
    FAILED=500
}

console.log(ServerResponseStatus)
// Object.values(ServerResponseStatus).forEach((item)=>{
//     console.log(item)  
// })

// SUCCESS
// FAILED
// 200
// 500

Object.values(ServerResponseStatus).forEach((item) => {
  if(typeof item === 'string'){
    console.log(item)
  }
});


interface ServerResponse{
    result: ServerResponseStatus
    data: string[]
}

function getServerResponseStatus(): ServerResponse {
  return {
    result: ServerResponseStatus.SUCCESS,
    data: ['data one','data two','data three']
  };
}

const response: ServerResponse = getServerResponseStatus()
console.log(response)


enum Abhishek{
    age=30
}

let myAge :Abhishek = 30   //it will work for number in enum

enum Avinash{
    department= "FULL STACK"
}

//let  myDepartment :Avinash = "FULL STACK" //it won't work in enum


enum UserRoles{
    ADMIN,
    EMPLOYEE,
    MANAGER
}

type User = {
    id:number,
    name:string,
    role:UserRoles,
    contact:[string,string]
}

function createUsers(user:User):User {
    return user
}

const user1 = createUsers({
  id:383,
  name:'abhishek',
  role:UserRoles.ADMIN,
  contact:['abhishek@gmail.com','43493-5852-49858']
})

console.log('User 1 ........',user1)



//Type assertion................................................................

let someValue:any ="this is a string";
let strLength:number =  (someValue as string).length;
console.log("The string length is ",strLength)

type Bird={
    name:string;
}

let birdString ='{"name":"Engale"}'
let dogString ='{"bread":"Poodle}'

let birdObj = JSON.parse(birdString)
let dogObj = JSON.parse(dogString)

let bird = birdObj as Bird
let dog = dogObj as Bird

console.log(`${bird.name} can fly`)
console.log(`${dog.name} can not fly `)
//console.log(`${bird.bread}`)
console.log(dog.name)



enum Status{
    Pending="pending",
    Declined='desclined'
}

type User ={
    name:string;
    status:Status;
}

//save Status.Pending in DB as a string
//retrive string from the DB

const statusValue ='pending';

//const user : User={name:'john',status:Status[statusValue]}
//const user : User = {name:'john',status: statusValue as Status}; 


//Type unknown................................................................
let unknownValue :unknown
unknownValue=10
unknownValue='hello'
unknownValue =[1,2,4,'555']
unknownValue='abhishek'

//unknownValue.length  // will give error message unknownValue is type of unknown

if(typeof unknownValue === 'string'){
    console.log(unknownValue.length)
}


//type never................................................................
let neverValue :never
//neverValue =10
//neverValue ='hello'


type Theme = 'DARK' | 'LIGHT'

// function getTheme(theme:Theme):void {
//     if(theme == "DARK"){
//         console.log("dark........")
//        return
//     }
//     if(theme == "LIGHT"){
//         console.log("light........")
//         return
//     }
// }

//getTheme()



//moduleDetection ="force"  ====>tsconfig. 