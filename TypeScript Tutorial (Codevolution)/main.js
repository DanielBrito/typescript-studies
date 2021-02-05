"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello, Daniel!';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
sum = x + y;
console.log('Sum = ' + sum);
var isBeginner = true;
var total = 0;
var name = 'Computer Science';
var sentence = "I love " + name + "!";
console.log(sentence);
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
console.log('Color: ' + color);
var randomValue = 10;
randomValue = true;
randomValue = 'Daniel';
console.log(randomValue);
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    return num2 ? num1 + num2 : num1;
}
console.log(add(20, 10));
console.log(add(5));
function duplicate(num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 * num2;
}
console.log(duplicate(5));
function fullName(person) {
    console.log("Hello, " + person.firstName + " " + person.lastName + "!");
}
var person = {
    firstName: 'Daniel',
    lastName: 'Brito'
};
fullName(person);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning, " + this.employeeName + "!");
    };
    return Employee;
}());
var employee1 = new Employee('Daniel');
employee1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks to " + this.employeeName);
    };
    return Manager;
}(Employee));
var manager1 = new Manager('Maria');
manager1.delegateWork();
manager1.greet();
