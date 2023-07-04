type Team = "red" |"blue"|"yellow"
type Health = 1 | 5 | 10
interface User{
    name:string
}
interface FootballUser extends User{
    nickname:string
    team:Team
    health:Health
}
/* 위와 아래는 똑같은 표현. interface는 object의 모양을 결정할때만 쓰일 수 있다.
type User1 = {
    name:string
}
type FootballUser1 = User1 & {
    nickname:string
    team:Team
    health:Health
}
*/
const nico1 : FootballUser ={
    name:"nicolas",
    nickname:"nico",
    team:"red",
    health:10
}