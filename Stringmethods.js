// Uppercase & Lowercase

let fruit = "applE"
let capFruit = fruit.toUpperCase();
let lowFruit = fruit.toLowerCase();

console.log(capFruit,lowFruit);

let newFruit = capFruit.concat("/",lowFruit);
console.log(newFruit);

let noTrim = "               Apple         "
console.log(noTrim);

let trim = noTrim.trim()
console.log(trim);

let a = fruit.charAt(0);
console.log(a);

let e = fruit.charAt(4);
console.log(e);

let comFruit = "A,p,p,l,e";
let splitFruit = comFruit.split(",")
console.log(typeof(splitFruit) ,splitFruit);