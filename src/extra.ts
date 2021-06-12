//Lesson 4 - Explicit & Union Types
let a: string[] = [];
a.push("It means You Can't change the type");

let b: (string | number)[] = [];
b.push("Amar naam Asraf and Age", 22);

let c: {
  name: string;
  age: number;
  adult: boolean;
};

c = {
  name: "Asraful",
  age: 22,
  adult: true,
};

// dYNAMIC TYPE OR any type

let d: any;
d = "No error";
d = 34;
d = true;

//object type

let e: {
  name: any;
  age: any;
  adult: any;
};
e = {
  name: "asraf",
  age: "twenty",
  adult: "yes",
};

// How to use function in Typescript

// let myFunction: Function;

// myFunction= function name(params:type) {

// }

const myFunction = (a: number, b: number) => {
  console.log(a * b);
};
myFunction(11, 4);

// optional or defult value

const youFubnction = (r: string, k: string, z: number = 11) => {
  return r + k + z;
};

console.log(youFubnction("I love My", "bb and mt total bb is gonna be "));

// TrpeScript void

// Signituer assin in TypScript
let add: (x: number, y: number) => number; //its called signiture

add = (a: number, b: number) => {
  //we are > use it in a function
  return a + b;
};

// another example is

let add2: (n: string, a: string) => string; //signiture or pattern
add2 = (a: string, b: string) => {
  if (a === "Asraf") {
    return a + ` is going to marry ` + b;
  } else {
    return "Only allah can Help them";
  }
};
console.log(add2("Asraf", "Neha"));

// TypeScript Class || class ar ar ak naam hossce objecr ar bluePrint

class Player {//its called Acess Modyfier defult public & readonly and privet


  constructor(             //shortcut
    private name: string,
    readonly age: number,
    public country: string
  ) {}
  
  play() {
      console.log(`${this.name} is playing from ${this.country}`)
  }
}
const tamim = new Player("Tamim", 35, "Bangladesh");
const sakib = new Player("Shakib Bal Hassan", 31, "Bangladesh");
const asraful = new Player("Ashraful", 39, "Bangladesh");
console.log()

const players: Player[]= [];
players.push(tamim, sakib, asraful);
console.log(players)
// Acess modyfier 
console.log(tamim.age)

//Module System 
//Module is use for export and import Class
//You have to also modyfy tscConfig.json file like module and so on 
//Summit ar 11 number tutorial



// Interfaces 


// Generics 

const addId= <T extends {
  name: string,
  age: number,
  country: string
}>(obj: T) =>{
  let id = Math.floor(Math.random() * 100)
  return{ ...obj, id}
};

let user= addId({
  name: "Mern",
  age: 23,
  country: "BanglaDesh"
});

addId(user);



//Another example of GENERICS > interfaces

interface practice<T> {
  status: number,
  type: string,
  data: T

}

const resONe: practice <Object> = {
status: 200,
type: "good",
data: {
  name: "Asraful",
  age: 23,
  country: "Namibia"
}
}



//      ENUM type

enum RType{

}

interface ApiResponse {
  status: number,
  type: RType,
   
}