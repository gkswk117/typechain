//#3.2 Polymorphism
//- Generic => type variable
/*
polymorphism
인자들과 반환값에 대하여 형태(타입)에 따라 그에 상응하는 형태(타입)를 가질 수 있다.

any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다.
any는 any로서 밖에 알 수 없지만 generics는 타입 정보를 알 수 있다.
*/
/*
https://www.typescriptlang.org/docs/handbook/2/generics.html
*/
type SuperPrint = {
    <T>(arr:T[]):T
}
const superPrint:SuperPrint=(arr)=>arr[0]
console.log(superPrint([1,2,3,4]))
console.log(superPrint([true,false,true]))
console.log(superPrint(["a","b","c"]))
console.log(superPrint([1,2,true,false,"hello"]))

type MinerPrint ={
    (arr:any):any
}
const minerPrint:MinerPrint=(arr)=>arr[0]
console.log(minerPrint([1,2,3,4]))
console.log(minerPrint([true,false,true]))
console.log(minerPrint(["a","b","c"]))
console.log(minerPrint([1,2,true,false,"hello"]))

type Human<E> ={
    name: string
    extraInfo:E
}
type HumanExtra = {
    age:number
    address:string
    favFood:string
}
type Type = Human<HumanExtra>
const hw: Type={
    name:"gkswk",
    extraInfo:{
        age:1,
        address:"songpa",
        favFood:"banana"
    }
}
const nicolas: Human<null>={
    name:"nico",
    extraInfo:null
}