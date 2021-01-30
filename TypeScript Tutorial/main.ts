export{}

let message = 'Hello, Daniel!'
console.log(message)

let x = 10
const y = 20

let sum
const title = 'Codevolution'

sum = x+y

console.log('Sum = ' + sum)

let isBeginner: boolean = true
let total: number = 0
let name: string = 'Computer Science'

let sentence: string = `I love ${name}!`

console.log(sentence)

let isNew: boolean = null
let myName: string = undefined

let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

let person1: [string, number] = ['Chris', 22]

enum Color {Red=5, Green, Blue}

let color: Color = Color.Green

console.log('Color: ' + color)

let randomValue: any = 10
randomValue = true
randomValue = 'Daniel'

console.log(randomValue)

let myVariable: unknown = 10

function hasName(obj: any): obj is {name: string}{
    return !!obj && typeof obj==="object" && "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name)
}

let a
a = 10
a = true

let b = 20

let multiType: number | boolean
multiType = 20
multiType = true

function add(num1: number, num2?: number): number {
    return num2 ? num1+num2 : num1
}

console.log(add(20,10))
console.log(add(5))

function duplicate(num1: number, num2: number = 2): number {
    return num1*num2
}

console.log(duplicate(5))

interface Person{
    firstName: string,
    lastName?: string
}

function fullName(person: Person){
    console.log(`Hello, ${person.firstName} ${person.lastName}!`)
}

let person = {
    firstName: 'Daniel',
    lastName: 'Brito'
}

fullName(person)

class Employee{
    protected employeeName: string

    constructor(name: string){
        this.employeeName = name
    }

    greet(){
        console.log(`Good morning, ${this.employeeName}!`)
    }
}

let employee1 = new Employee('Daniel')
employee1.greet()

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName)
    }

    delegateWork(){
        console.log(`Manager delegating tasks to ${this.employeeName}`)
    }
}

let manager1 = new Manager('Maria')
manager1.delegateWork()
manager1.greet()