// 基本
let is: boolean = true

let num: number = 0.2

let str: string = `foo`


let obj: object = { foo: 1 }

obj = []

obj = () => { }


let a: any = ""

a = true



let n: null = null; // 这个标识符被定义了，但它是空的
let u: undefined = undefined; // 未定义


function logMessage(): void {
    console.log("Hello, world!");
}

// 只要你函数报错或者死循环，你就用 never
function error(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {
    }
}

let userInput: unknown;
let userName: string;

// userName = a

userInput = "hello";
if (typeof userInput === "string") {
    userName = userInput; // OK
}