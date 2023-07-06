let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = '42'
stringArr.push('hey')

guitars[0] = 1984
console.log(guitars.unshift('Strat'))

let test = []
let bands: string[] = []
bands.push('Van Halen')

//Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]
console.log(myTuple)

//Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
    prop3: 44
}

interface Guitarist {
    name?: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    albums: [1984, 5150, 'OU812']
}
console.log(evh)

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name?.toUpperCase()}`
}

console.log(greetGuitarist(jp))
// Enums

enum Grade {
    U = 42,
    D,
    C,
    B,
    A
}
console.log(Grade.B)