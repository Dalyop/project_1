// The basics
// 1. Variables
// A variabel is a temporal storage location
// We can define a variable using either of this keywords, the let or var
// Pascal naming convention
// let FirstName = "Isaac";
// // Camel case
// let lastName = "Dalyop";
// // Underscore
// let full_name = "Dalyop Isaac";
// // Data types
// // Basic data types are numbers, strings, boolean
// // Advanced null, undefined, Arrays, Objects
// console.log(FirstName);
// operators
// 1. Arithmetic operators
// 2. Comparison operators
// 3. Logical operators
// let condition1 = false;
// let condition2 = false;
// console.log(!condition1);

// let varr = "Check me out";
// varr = "Common guyss"

// function check() {
//     let varr = "I am your man!"
// }

// check();
// console.log(varr)
// console.log(name);
// var name = "John";

// // While Loop
// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let UserEmails = [];
// let UserPasswords = [];

// function createUser(email, password) {
//     UserEmails.push(email);
//     UserPasswords.push(password);
//     console.log(UserEmails, UserPasswords)
// }

// createUser("chiom@gmail.com", "12345");
// createUser("emma@gmail.com", '54321');

// function Login(email, password) {
//     for(let i = 0; i < UserEmails.length; i++) {
//         if (email === UserEmails[i] && password === UserPasswords[i]) {
//             console.log("Welcome back!", UserEmails[i]);
//         }
//     }
// }

// Login("chisom@gmail.com", "12345");

// Some more Array Methods
// let books = ["Opposite Attracts", "Eloquent JavaScript", "While My Pretty One Sleeps"];

// // 1. The Push method - This adss the item to the end of the list
// books.push("Chike and the River");
// console.log(books)
// // 2. The Pop method - This removes the item from the end of the list
// let last_book = books.pop();
// console.log(books, last_book, "was poped from the Array")
// // 3. The Remove Method - This removes an item from the list entirely.
// books.splice(1, 2);
// console.log(books, "The second book was removed")
// 4. The shift method
// // books.shift();
// console.log(books)
// // 5. The unshift method
// books.unshift("The Power of Now");
// console.log(books) 

// // 6. The toString() method
// console.log(books.toString());

// // 7. The at() method
// console.log(books.at(2));

// // 8. The join() method
// console.log(books.join(" **** "))

// // 9. The delete() method
// console.log(delete books[2])
// console.log(books)

// // 10. The concat() method
// let men = ["Johnson", "Tyson", "Greg"];
// let women = ["Cindy", "Bella", "Blake"];
// let childeren = ["John", "Michael", "George"];
// let combinedList = men.concat(women, childeren);

// // 11. Copy Within method
// console.log(combinedList.copyWithin(3, 0, 3));

// // 12. indexOf method
// console.log(combinedList.indexOf("Micheal"));

// // 13. The includes method
// console.log(men.includes(1));

// Objects are simply prototypes that combine data and functions


// let Discount = {
//     carBrand: "",
//     carModel: "",
//     carPrice: 0,
//     calculateDiscount: function(discountRate) {
//         return this.carPrice - (this.carPrice * discountRate / 100);
//     } 
// }
// Creating different objects instacnces
// let car1 = Discount;
// car1.carBrand = "Toyota";
// car1.carModel = "Camry";
// car1.carPrice = 20000;
// console.log(car1.calculateDiscount(10));
// let car2 = Object.create(Discount);
// car2.carBrand = "Honda";
// car2.carModel = "Civic";
// car2.carPrice = 22000;
// console.log(car2.calculateDiscount(15));
// let car3 = Object.create(Discount);
// car3.carBrand = "Ford";
// car3.carModel = "Focus";
// car3.carPrice = 18000;
// console.log(car3.calculateDiscount(20));

// // Creating a new object using the constructor function
// function Car(brand, model, price) {
//     this.carBrand = brand;
//     this.carModel = model;
//     this.carPrice = price;


//     this.calculateDiscount = function(discountRate) {
//         return this.carPrice - (this.carPrice * discountRate / 100);
//     }
// }
// // Creating instances of the Car object
// let car4 = new Car("Nissan", "Altima", 25000);
// console.log(car4.calculateDiscount(12));

// The call(), aplly() and bind() methods
// These methods are used to call a function with a specific context (the value of 'this').
// 1. The call() method
// The call() method calls a function with a given 'this' value and arguments provided individually.
// Example:
// function greet(greeting) {
//     console.log(greeting + ", " + this.name);
// }
// let person = { name: "Alice" };
// greet.call(person, "Hello"); // Output: Hello, Alice
// 2. The apply() method

// Array of objects
let fruits = ["Apples", "Bananas", "Cherries", "Dates", "Elderberries", "Figs", "Grapes", "Honeydew", "Kiwi", "Lemons"];

let fruit_tag = document.getElementById('fruits');
const button = document.getElementById('btn');
let btn_show = true;

button.addEventListener('click', function () {
    if (btn_show) {
        for (let i = 0; i < fruits.length; i++) {
            let lists = document.createElement('li');
            lists.innerText = fruits[i];
            console.log(fruit_tag);
            fruit_tag.appendChild(lists);
            button.innerText = "Hide Fruits";
            btn_show = false;
        }
    } else {
        fruit_tag.innerHTML = '';
        button.innerText = "Show Fruits";
        btn_show = true;
    }
})

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * huiljk\
 * kjk
 */
// 
