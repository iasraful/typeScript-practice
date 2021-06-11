//Lesson 4 - Explicit & Union Types
let a: string []= [];
    a.push("It means You Can't change the type")

let b: (string | number)[]= [];
b.push("Amar naam Asraf and Age", 22)

 let c:{
     name: string,
     age: number,
     adult: boolean
 }

 c={
     name: 'Asraful',
     age: 22,
     adult: true
}

// dYNAMIC TYPE OR any type

let d:any;
d= "No error"
d = 34
d = true

//object type

let e: {
    name: any,
    age: any,
    adult: any;
}
e= {
    name: 'asraf',
    age: 'twenty',
    adult: 'yes'
}