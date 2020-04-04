let is_addon = false;
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
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let fullName = `Bob Bobbington`;
let age = 37;
let sentence = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
console.log(sentence);
let list = [1, 2, 3];
let listA = [1, 2, 3];
// Declare a tuple type
let x;
// Initialize it
x = ["hello", 10]; // OK
console.log(x[0].substring(1)); // OK
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["yellow"] = 3] = "yellow";
})(Color || (Color = {}));
;
let color_name = Color[2];
console.log(color_name);
let end = 'end';
document.title = "Hello"; // Ok because document has been declared
class BankAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(credit) {
        this.balance += credit;
        return this.balance;
    }
}
//# sourceMappingURL=app.js.map