let age: number = 30
let firstName: string = "Jonathan"
let isTeaching: boolean = false

const classes: string[] = ["javascript", "typescript"]
let NumberOfStudents: number[] = [23,14,]
NumberOfStudents.push(age);
// console.log(NumberOfStudents)


enum TaxForums {
    incomeTax=1099, 
    childCare=420,
    bitcoinLoss=420,
    richDude=378,
    richLady="Omg I'm never going to get this!",
}

const WhichTaxForm = TaxForums.childCare
console.log("use tax form",WhichTaxForm)

//console.log("You're how old: ",age)

const postalCode:number | string = "L3p-6R8"
//postalCode = 33333
// 


function findIndex (index: number, arr: number[]) {
    return arr[index]
}

function log(msg: string| number): void {
    //inserts into database
    console.log("hurray... database inserted")
}

let finalNumber: number = findIndex(1,NumberOfStudents)
//log(finalNumber + 1)

//log("yep. It's not going to rerun something")


const complexObject : any = {name: "damian", height: "yes please"}

interface human {
    name:string
    height: string
}


interface Teacher extends human {
    age: number
    weight?: string
}

const complexObject2 : Teacher = {name: "damian", height: "yes please", age: 30}

function displayTeacher(teacher: Teacher): string {
    return `this teacher is ${teacher.age} old`
}

console.log(displayTeacher(complexObject2))