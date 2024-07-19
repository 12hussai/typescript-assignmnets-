// let person = "hussain";
// console.log("hello" , person, "would uou like to learn some python today ");

// //3

// let per1 = "hussain";
// console.log(per1.toLowerCase());
// console.log(per1.toUpperCase());
// //console.log(per1.replace(/\b\w\g, (char => char.toUpperCase()));

// // 4
// console.log("Albert Einstein once said ,\"a person who never made a mistake never learned something new\" ")

// //5
// let famousperson = "Albert Einstein";

// let message= "\"a person who never made a mistake never learned something new\" ";

// console.log(famousperson,message);

// //6

// let whitespacename = "\n\t Hussain Ahmed \t\n";
// console.log(whitespacename);
// let withoutspacename = whitespacename.trim();

// console.log(withoutspacename);



// //7

// console.log(4+4);
// console.log(16-8);
// console.log(2*4);
// console.log(16/2);

// // 8

// let favnum = "5";
// let message1 = "my favorite number is : ";

// console .log (message1 , favnum);

// // 10

// // addition
// console.log(4+4);
// // substraction
// console.log(16-8);
// // multiplication
// console.log(2*4);
// // division 
// console.log(16/2);

// // 11 

// let freindsname =["Hamza" , "Lubna", "Shaista" , "kareena" ]
// freindsname.forEach(freindsname => console.log(freindsname));

// // 12


// let freindsname2 =["Hamza" , "Lubna", "Shaista" , "kareena" ]
// freindsname2.forEach(freindsname2=> console.log(`hello ${freindsname2},how are you?`));

// Your Own Array
let favoriteTransportation = ['motorcycle', 'car', 'bicycle'];

for (let item of favoriteTransportation) {
    console.log(`I would like to own a ${item}.`);
}

// Guest List
let dinnerGuests = ['Albert Einstein', 'Leonardo da Vinci', 'Marie Curie'];

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Changing Guest List
console.log("Leonardo da Vinci can't make it to dinner.");

let newGuest = 'Isaac Newton';
let index = dinnerGuests.indexOf('Leonardo da Vinci');
if (index !== -1) {
    dinnerGuests[index] = newGuest;
}

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// More Guests
console.log("Good news! Found a bigger dinner table.");

dinnerGuests.unshift('Nikola Tesla'); // Add new guest to the beginning
dinnerGuests.splice(Math.ceil(dinnerGuests.length / 2), 0, 'Ada Lovelace'); // Add new guest to the middle
dinnerGuests.push('Stephen Hawking'); // Add new guest to the end

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Shrinking Guest List
console.log("Sorry, the new dinner table won't arrive in time. Can invite only two people.");

while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop();
    console.log(`Sorry ${removedGuest}, can't invite you to dinner.`);
}

for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

dinnerGuests = []; // Empty the list
console.log(dinnerGuests); // Check if the list is empty

// Seeing the World
let placesToVisit = ['Japan', 'Italy', 'New Zealand', 'Egypt', 'Brazil'];

console.log("Original order:");
console.log(placesToVisit.join(', '));

console.log("Alphabetical order:");
console.log([...placesToVisit].sort().join(', '));

console.log("Original order (still intact):");
console.log(placesToVisit.join(', '));

console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse().join(', '));

console.log("Original order (still intact):");
console.log(placesToVisit.join(', '));

placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit.join(', '));

placesToVisit.reverse();
console.log("Original order (reversed again):");
console.log(placesToVisit.join(', '));

console.log("Sorted in alphabetical order:");
console.log(placesToVisit.sort().join(', '));

console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit.sort().reverse().join(', '));

// Dinner Guests
console.log(`Number of people invited to dinner: ${dinnerGuests.length}`);

// Array of Mountains
let mountains = ['Everest', 'K2', 'Kangchenjunga', 'Lhotse', 'Makalu'];

// TypeScript Object
let programmingLanguages = {
    "JavaScript": "High-level, interpreted programming language",
    "Python": "High-level, interpreted programming language",
    "TypeScript": "Superset of JavaScript with optional static typing"
};

// Intentional Error
let numbers = [1, 2, 3];
console.log(numbers[3]); // This will produce an index error, as there's no element at index 3.

// Conditional Tests
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// // More Conditional Tests
// console.log("Equality and inequality with strings:");
// console.log("apple" == "Apple");
// console.log("apple" != "banana");

console.log("Lower case function:");
console.log("apple".toLowerCase() == "Apple".toLowerCase());

console.log("Numerical tests:");
console.log(5 > 3);
console.log(10 < 20);
console.log(15 >= 15);
console.log(10 <= 10);

console.log("Tests using 'and' and 'or' operators:");
console.log((5 > 3) && (10 < 20));
console.log((5 > 3) || (10 < 5));

console.log("Test whether an item is in an array:");
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana'));

console.log("Test whether an item is not in an array:");
console.log(!fruits.includes('kiwi'));

// Alien Colors #1
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("You earned 5 points!");
}

// Alien Colors #2
if (alien_color === 'green') {
    console.log("You earned 5 points for shooting the green alien!");
} else {
    console.log("You earned 10 points for shooting the alien!");
}

// Alien Colors #3
if (alien_color === 'green') {
    console.log("You earned 5 points!");
} else if (alien_color === 'yellow') {
    console.log("You earned 10 points!");
} else if (alien_color === 'red') {
    console.log("You earned 15 points!");
}

// Stages of Life
let age = 25;
if (age < 2) {
    console.log("You are a baby.");
} else if (age < 4) {
    console.log("You are a toddler.");
} else if (age < 13) {
    console.log("You are a kid.");
} else if (age < 20) {
    console.log("You are a teenager.");
} else if (age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are an elder.");
}

// Favorite Fruit
let favorite_fruits = ['banana', 'apple', 'mango'];
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}

// Hello Admin
let usernames = ['admin', 'john', 'sarah', 'emma', 'charlie'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
}
}

// No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}

