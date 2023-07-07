type One = string
type Two = string | number
type Three = 'hello'

let a: One = 'hello'
let b = a as Two //less specific
let c = a as Three //more specific

let d = <One>'world'
let e = <One | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

(10 as unknown) as string

let myVal: string = addOrConcat(2, 2, 'concat') as string
console.log(myVal)

let nextVal: number = addOrConcat(2, 2, 'add') as number
console.log(nextVal)
//uuy 

//The DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

/* img.src
myImg.src
nextImg.src */