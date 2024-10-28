//let name = "Obed";
let surname = "Gundra";

//console.log(name)
//console.log(surname)


let age = 11;
//console.log(age)

age = 54

//console.log(age)

const pi = 3.14145;
// pi = 10;

// console.log(pi)

const max = 57;
var actual = max - 13;
percentage = actual / max

//console.log(percentage)

let admin, name;
name = 'John';
admin = name;
//alert(admin);




// STRINGS --------------------------------------------------------------------------------------

const string = 'The revolution will not be televised.';

const badString1 = string;

//console.log(badString1);

// clicking a button, adding your name and displaying it

const button = document.querySelector("button")
function greet() {
    const name = prompt('What is your name?'); // like input() function in python
    const greeting = document.querySelector("#greeting"); // idk maybe calls greeting id from html
    greeting.textContent = `Hello ${name}, nice to meet you!`; // displays this message upon clicked
}

button.addEventListener("click", greet);

const song = "Sinking deep";
const Score = 60;
const HIghest_Score = 100;
const Output = `I like the song ${song} but i got a score of ${Score} out of ${HIghest_Score} in a sincing competetion. which is just ${(Score / HIghest_Score) * 100}%.`;

//console.log(Output)




// BOOLEANS ---------------------------------------------------------------------------------


//console.log('HAHAHA' > 1);

// console.log(typeof(undefined));
// console.log(typeof(null));
// console.log(null == undefined);

// CONDITIONALS ---------------------------------------------------------------------------------


let hour = 10
if (hour > 30){
    console.log('Less than 30')
}
else if (hour < 30){
    console.log('More than 30')
}
else {
    console.log('More than 30')
}