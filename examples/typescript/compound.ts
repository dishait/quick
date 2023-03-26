// 复合

// let myVar: any = 1

// myVar = ""

// myVar = true

let myVar: string | number = 1

myVar = ""

// myVar = false

type ID = string | number

let myID: ID = 1

myID = ""


interface Person {
    name: string
    age?: number
}

let obj2: Person = { name: 'foo', age: 12 }

obj2 = { name: 'bar' }

let ns: number[] = [1, 2, 3];


let person: [string, number, boolean] = ["Alice", 30, true];

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let direction: Direction = Direction.Up


enum Sizes {
    Big,
    Small
}

let size: Sizes = Sizes.Big