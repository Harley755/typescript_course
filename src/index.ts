let scales: number = 125_900;
let course: string = "TypeScript";
let isPublised: boolean = true;
let level;
console.log('number with underscore ', scales);
console.log(scales);

let numbersArray: number[] = [2, 4, 19];
numbersArray.forEach((x) => x * x);

// TUPLE
let user: [string, number] = ['2', 1];
user.push('lol');

// ENUM
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Large
console.log('mySize ', mySize);


// FUNCTION
function calculateTax(income: number, taxeYear: number = 2022) {
    if (taxeYear < 2022)
        return income * 1.2;

    return income * 1.3;
}

calculateTax(24_000)
console.log("calculateTax:", calculateTax)


// OBJECT
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log("date:", date)
    }
};


// TYPE suite de OBJECT
type Employee = {
     readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let secondEmployee: Employee = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log("date:", date)
    }
}

// UNION TYPE
function kgToLbs(weight: number | string): number {
    // Narrowwing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}


console.log("kgToLbs number :", kgToLbs(10));

console.log("kgToLbs string :", kgToLbs("10kg"));


// INTERSECTION
type Dragable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Dragable & Resizable


let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
}


// LITERAL TYPES
// La quantité ne peut qu'être définie sur 50 ou 100
let quantite: 50 | 100 = 50


// NULLABLE TYPE;
function greet(name: string | null) {
    if (name) 
        console.log(name.toUpperCase);
    else 
        console.log('Hola !');
        
}

greet(null)


// OPTIONAL CHAINING
type Customer = {
    birthday?: Date    
}

function getCustomer(id: number): Customer | null | undefined{
    return (id === 0) ? null : {birthday: new Date()};
}

let obtainDate = getCustomer(1);

// if (obtainDate !== null && obtainDate !== undefined)
//     console.log("obtainDate:", obtainDate.birthday)

// OPTIONAL PROPERTY ACCES OPERATOR
console.log("obtainDate:", obtainDate?.birthday?.getFullYear())

// OPTIONAL ELEMENT ACCES OPERATOR
// console.log("obtainDate:", Customers?.[0])

// OPTIONAL CALL ACCES OPERATOR
// console.log("obtainDate:", Customers?.[0])
let log: any = null;
log?.('a');



