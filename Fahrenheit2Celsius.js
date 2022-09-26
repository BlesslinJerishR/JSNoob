function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

let f104 = toCelsius(104);
console.log(f104); 
let f96 = toCelsius(96);
console.log(f96); 
let f98 = toCelsius(98);
console.log(f98); 

let x = toCelsius(77);
let text = "The temperature is " + x + " degrees celcius";
console.log(text);

