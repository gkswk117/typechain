//#3.1 Recap
//property key의 타입을 정할 수 있다.
//property가 생성자 함수에 의해 바로 초기화 되지 않고, 추후에 값이 입력될 수 있다.
//argument로 클래스를 넣을 수는 없지만, parameter의 타입으로 클래스를 넣을 수도 있다. 이러면 argument로 해당 클래스의 인스턴스만을 받겠다는 뜻.
//#3.2 부터는 parameter로 클래스 외에 넣을 수 있는 또 다른 타입을 알아볼 예정.
type Words ={
    [k:string]:string
}
class Dict {
    private words:Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term]===undefined){
            this.words[word.term]=word.def
        }
    }
    getWord(term:string){
        return this.words[term]
    }
    /*
    코드 챌린지
    단어를 삭제하고, 단어를 업데이트하는 메소드를 만들기
    */
}
class Word {
    constructor(
        public term:string,
        public def:string
    ){}
}
const kimchi= new Word("김치","배추를 소금에 절여서 만든 한국의 음식. 매콤하고 시큼한게 특징이다.")
const dict = new Dict()
dict.add(kimchi)
console.log(dict.getWord("김치"))
