type Player={
    name:string,
    age?:number
}
const nico : Player={
    name:"nico"
}
const lynn : Player={
    name:"lynn",
    age:28
}

function playerMaker(name:string) : Player {
    return {
        name:name
    }
}
//함수의 argument의 타입 지정, 함수의 return값의 타입 지정.
//argument로 string 타입을 받고, return으로 Player 타입을 반환한다.
const hanwoong = playerMaker("hw")
hanwoong.age = 32
console.log(hanwoong)

const playerMaker2 = (name:string) : Player => ({name:name})