// Type Aliases
type stringOrNumber = string | number
type stringOrNumberArray = stringOrNumber[]

type Guitarist = {
    name?: string,
    active?: boolean,
    albums: stringOrNumberArray
}

type mathFunction = (x: number, y: number) => number


// Literal types
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

//functions
let add: mathFunction = function (a, b) {
    return a + b
}

const logMsg = (message: any): void => console.log(message)
let subtract = function (c: number, d: number):
    number {
    return c - d
}
logMsg('hello!')
logMsg(add(2, 3))
logMsg(null)
logMsg(subtract(1, 2))

let multiply: mathFunction = function (c, d) {
    return c * d
}
logMsg(multiply(9, 8))

const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}
logMsg(total(3, 6, 8, 34, -123))

const createError = (errMsg: string) => {
    throw new Error(errMsg)
}