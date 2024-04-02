console.log('Generic 2................................................................ ')
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

//fetch data in typescript ................................................

//1.
type Collectione = {
  id: string;
  image:string;
  name:string;
  info: string;
  price:string;
  something:boolean;
};

const urla = `https://www.course-api.com/react-tours-project`;

async function getDataFromUrla(url:string): Promise<Collection[]>{
    try{
     const response = await fetch(url);
     if(!response.ok){
        throw new Error("HTTP error "+response.status);
     }
     const data = await response.json();
     console.log('Data...................',data);
     return data;

    }catch(error){
      const errorMessage = error instanceof Error ? error.message : 'Some other error.......';
      console.error("Error................",errorMessage)
      return [];
    }
}

//getDataFromUrl(url)
const collectionss = await getDataFromUrl(urla)
// collections.map((collection) =>{
//     console.log(collection)
// })

// collections.map((collection:any) =>{
//     console.log(collection.name)
// })

collectionss.map((collection:Collection) =>{
    console.log(collection.image)
    //console.log(collection.something)   //undefind
})

//setup type and return correct type while fetching data in typescript................................................................

//2.
import {z} from "zod"

const collectionSchema = z.object({
  id: z.string(),
  image: z.string(),
  name: z.string(),
  info: z.string(),
  price: z.string(),
  //something:boolean;
});

type Collection = z.infer<typeof collectionSchema>;



// type Collection = {
//   id: string;
//   image:string;
//   name:string;
//   info: string;
//   price:string;
//   //something:boolean;
// };

const url = `https://www.course-api.com/react-tours-project`;

async function getDataFromUrl(url:string): Promise<Collection[]>{
    try{
     const response = await fetch(url);
     if(!response.ok){
        throw new Error("HTTP error "+response.status);
     }
     const rawData = await response.json();
     const result = collectionSchema.array().safeParse(rawData);
     console.log("result........",result);
     if (!result.success){
         throw new Error("New error while fetching", `${result.error}`);
     }
     return result.data;
     
     //console.log('Data...................',data);
     //return data;

    }catch(error){
      const errorMessage = error instanceof Error ? error.message : 'Some other error.......';
      console.error("Error................",errorMessage)
      return [];
    }
}

//getDataFromUrl(url)
const collections = await getDataFromUrl(url)
// collections.map((collection) =>{
//     console.log(collection)
// })

// collections.map((collection:any) =>{
//     console.log(collection.name)
// })

collections.map((collection:Collection) =>{
    console.log(collection.image)
    //console.log(collection.something)   //undefind
})

//setup type and return correct type while fetching data in typescript................................................................
