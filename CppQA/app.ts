let is_addon: boolean = false;

const addon = require('./x64/Release/cppaddons');

is_addon = true;

if (is_addon) {
    const obj = new addon.MyObject(10);
    console.log(obj.plusOne());
    // Prints: 11
    console.log(obj.plusOne());
    // Prints: 12
    console.log(obj.plusOne());
    // Prints: 13
}

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${ age + 1} years old next month.`;

console.log(sentence);

let list: number[] = [1, 2, 3];
let listA: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

console.log(x[0].substring(1)); // OK

enum Color { red = 1, green, yellow };
let color_name: string = Color[2];
console.log(color_name);

let end: string = 'end';

declare var document;
document.title = "Hello";  // Ok because document has been declared

class BankAccount {
    balance = 0;
    deposit(credit: number) {
        this.balance += credit;
        return this.balance;
    }
}

