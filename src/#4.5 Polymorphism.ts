//클래스에 generic을 전달하는 방법
//메소드에 generic을 전달하는 방법
interface SStorage<T> {
    [key:string]:T
}
type SuperPrint2 = {
    <T>(arr:T[]):T
}
class LocalStorage<T> {
    private storage:SStorage<T>={}
    set(key:string, value:T){
        this.storage[key] = value
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T{
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
    superPrint:SuperPrint2=(arr)=>arr[0]
}
const stringStorage = new LocalStorage<string>()
stringStorage.set("key1","as16a4d7sfh8i8owa6ef4jkb2zc3v4ero2ij")
console.log(stringStorage.get("key1"))
console.log(stringStorage.superPrint([1,2,true,false,"hello"]))

interface tempType{
    [str:string]:boolean
}
const booleanStorage = new LocalStorage<tempType>()
booleanStorage.set("key1", {"Do you love her?":true})
booleanStorage.set("key2", {"Can I get some coffee?":false})
console.log(booleanStorage.get("key2"))