"use strict";
//Lesson 4 - Explicit & Union Types
var a = [];
a.push("It means You Can't change the type");
var b = [];
b.push("Amar naam Asraf and Age", 22);
var c;
c = {
    name: "Asraful",
    age: 22,
    adult: true,
};
// dYNAMIC TYPE OR any type
var d;
d = "No error";
d = 34;
d = true;
//object type
var e;
e = {
    name: "asraf",
    age: "twenty",
    adult: "yes",
};
// How to use function in Typescript
// let myFunction: Function;
// myFunction= function name(params:type) {
// }
var myFunction = function (a, b) {
    console.log(a * b);
};
myFunction(11, 4);
// optional or defult value
var youFubnction = function (r, k, z) {
    if (z === void 0) { z = 11; }
    return r + k + z;
};
console.log(youFubnction("I love My", "bb and mt total bb is gonna be "));
// TrpeScript void
// Signituer assin in TypScript
var add; //its called signiture
add = function (a, b) {
    //we are > use it in a function
    return a + b;
};
// another example is
var add2; //signiture or pattern
add2 = function (a, b) {
    if (a === "Asraf") {
        return a + " is going to marry " + b;
    }
    else {
        return "Only allah can Help them";
    }
};
console.log(add2("Asraf", "Neha"));
// TypeScript Class || class ar ar ak naam hossce objecr ar bluePrint
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log(this.name + " is playing from " + this.country);
    };
    return Player;
}());
var tamim = new Player("Tamim", 35, "Bangladesh");
var sakib = new Player("Shakib Bal Hassan", 31, "Bangladesh");
var asraful = new Player("Ashraful", 39, "Bangladesh");
console.log();
var players = [];
players.push(tamim, sakib, asraful);
console.log(players);
// Acess modyfier 
console.log(tamim.age);
