/*
Abstract class vs Interface
우리는 서로 다른 클래스들이 공통적으로 갖는 property와 메소드를 지정해주기 위해서 abstract class를 사용한다.
또 다른 방법으로 인터페이스를 이용하는 방법이 있다. 
*/
//Abstract class
abstract class AbstractGentleman{
    constructor(
        protected firstName:string,
        protected lastName:string
    ){}
    abstract sayHi(name:string):void
    abstract fullName():string
}
class Gentleman extends AbstractGentleman{
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        console.log(`${name}, sayHi ${this.fullName()}.`)
    }
}
//Interface
/*
- 자바스크립트로 변형되면 사라지는 코드이기 때문에 메모리를 차지하지 않아서 가볍다는 특징이 있다.
- 또한 comma(,)로 여러 interface를 상속받을 수 있다.
- 인터페이스에서 정의한 프로퍼티는 클래스에서 반드시 public 프로퍼티로 정의해야 한다.
당연하다. 어떤 팀에서 일을 하는데 만드는 클래스를 일부 통일시키기 위해서 interface를 만들었고,
클래스를 누가 만들었든지 간에 firstName, lastName은 당연히 사용할 수 있어야 한다.
근데 그걸 private로 만들면 interface 용도를 역행하는 꼴이다.
- 타입으로 Interface 쓸 때, 타입으로 Class 쓸 때 서로 다르다.
예를 들어, 함수 리턴 타입으로 Interface를 넣으면, 리턴값이 그 형태를 만족시키는 객체이기만 하면 된다.
하지만 함수 리턴 타입으로 Class를 넣으면, 반드시 그 클래스의 인스턴스여야 한다.
*/
interface InterfaceGentleman{
    firstName:string,
    lastName:string,
    sayHi(name:string):void,
    fullName():string
}
interface AnotherInterface{
    health:number
}
class Gentleman2 implements InterfaceGentleman, AnotherInterface{
    private a:number
    constructor(public firstName:string, public lastName:string, public health:number){
        this.a=1
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        console.log(`${name}, sayHi ${this.fullName()}. a is ${this.a}`)
    }
}
const Harry = new Gentleman2("Harry","Potter",100)
Harry.sayHi("한웅")
Harry.firstName

type testtype ={
    (a:number):InterfaceGentleman
}
const testfunc:testtype=(a)=>{
    return {
        firstName:"rlah",
        lastName:"Wl",
        fullName:()=>"rlahWl",
        sayHi:(a)=>{}
    }
}

// private 사용 불가능
// class Gentleman3 implements InterfaceGentleman{
//     private a:number
//     constructor(private firstName:string, public lastName:string){
//         this.a=2
//     }
//     fullName(){
//         return `dd`
//     }
//     sayHi(name:string){
//         return `${name}, sayHi Jason. a is ${this.a}`
//     }
// }
// const rlahEl = new Gentleman3("d","d")
// rlahEl.firstName