//#4.0 Classes
/*
private, public: private은 클래스 외부에서 사용할 수 없다. 그게 자식 클래스일지라도.
protected: 클래스 내부 및 자식 클래스 내부에서 사용가능.
abstract class: 상속 기능만 있다. 직접 인스턴스 생성 불가.
abstract method: 부모 클래스에서는 call signature만 작성. 자식 클래스는 무조건 그 형식으로 메소드 정의를 해야됨.
*/
abstract class Teacher{
    constructor(private firstName:string, private lastName:string, protected nickname:string){}
    pub = ()=>{console.log(this.firstName+this.lastName)}
    abstract getNickName():void
}
class ExtendedTeacher extends Teacher{
    getNickName(): void {
        console.log(this.nickname)
    }
}
// const bhw = new Teacher("hanwoong","bae","gkswk")
const bhw = new ExtendedTeacher("hanwoong","bae","gkswk")
// console.log(bhw.nickname)
bhw.pub()
bhw.getNickName()