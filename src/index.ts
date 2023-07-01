//#2.1 Implicit Types vs Explicit Types
let str = "hello" //Implicit Types -> better
let strr : string = "world" //Explicit Types

//#2.2 Types of TS part One
type Player={
    readonly name:string,
    age?:number
}
const nico : Player={
    name:"nico"
}
const lynn : Player={
    name:"lynn",
    age:28
}

function PlayerMaker(name:string) : Player {
    return {
        name:name
    }
}
const PlayerMaker2 = (name:string) : Player => ({name:name})
//함수의 argument의 타입 지정, 함수의 return값의 타입 지정.
//argument로 string 타입을 받고, return으로 Player 타입을 반환한다.

const hanwoong = PlayerMaker("hw")
hanwoong.age = 32
console.log(hanwoong)

//#2.3 Types of TS part Two
//Readonly
//hanwoong.name ="rlahWl"

const numberArray: readonly number[] = [1,2,3,4]
//numberArray.push(1)

//Tuple
const tupleArray: [string, number, boolean] = ["nico", 1, false]
tupleArray.push("las")
// console.log(tupleArray[3])
// 이럴 때는 아래와 같이 하면 됨.
const numberArr: (number|string)[] = [1, "nico", 2]
numberArr.push(3)
console.log(numberArr[3])

const a = [1,2,3,4]
const b = true
//const c = a+b

//Any
const d:any[] = [1,2,3,4]
const e:any = true
const f = d+e
console.log(f)
d.push(e)
console.log(d)
