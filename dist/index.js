"use strict";
var _a;
let scales = 125900;
let course = "TypeScript";
let isPublised = true;
let level;
console.log('number with underscore ', scales);
console.log(scales);
let numbersArray = [2, 4, 19];
numbersArray.forEach((x) => x * x);
let user = ['2', 1];
user.push('lol');
;
let mySize = 3;
console.log('mySize ', mySize);
function calculateTax(income, taxeYear = 2022) {
    if (taxeYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(24000);
console.log("calculateTax:", calculateTax);
let employee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log("date:", date);
    }
};
let secondEmployee = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log("date:", date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log("kgToLbs number :", kgToLbs(10));
console.log("kgToLbs string :", kgToLbs("10kg"));
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantite = 50;
function greet(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log('Hola !');
}
greet(null);
function getCustomer(id) {
    return (id === 0) ? null : { birthday: new Date() };
}
let obtainDate = getCustomer(1);
console.log("obtainDate:", (_a = obtainDate === null || obtainDate === void 0 ? void 0 : obtainDate.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
//# sourceMappingURL=index.js.map