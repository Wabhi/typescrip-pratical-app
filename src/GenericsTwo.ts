type Car = {
    brand: string;
    modal: string;
}

type Product ={
    name:string,
    price:number
}

type Students = {
    name:string,
    age:number
}

const car : Car = {
    brand:"Fiat",
    modal:"Palio"
}

const product : Product = {
    name: "Tv 40 Po",
    price:1200.99
}

const student : Students = {
    name: "abhishek",
    age:29
}


// function printName<T>(input:T extends Students | Product):void {
//   console.log(input.name)
// }

// printName()

interface StoreData<T>{
   data:T[]
}

const storeNumber : StoreData<number> ={
    data:[1,3,4]
}
const storeString: StoreData<string> = {
  data: ["1","2","3"],
};