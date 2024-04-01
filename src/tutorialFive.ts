type valueType = string | number | boolean

let value : ValueType
const random = Math.random()
value = random<0.33 ?  'hello' : random<0.66 ? 123.456 :true;

//console.log(value)

function checkValue(value : ValueType):void{
    if(typeof value === "string"){
        console.log(value.toUpperCase())
    }else if(typeof value === "number"){
        console.log(value.toFixed(2))
    }else{
        console.log(value?"True":"False");
    }
}

checkValue(value)


//equality narrowing.....................................

type Dog = {name: string,type: string,bark:()=>void,}
type Cat = {name: string , type: "cat" ,claw: () => void}
type Animall = Dog | Cat

// function checkAnimalSoundType(animal: Animal){
//     if(animal.type==='dog'){
//     animal.bark()
//     }else{
//         animal.claw();
//     }
// }

// function checkAnimalSoundType(animal: Animall){
//     if('bark' in animal){
//       animal.bark();
//     }else{
//         animal.claw();
//     }
// }


//truthy and falsy gaurd................................................................
