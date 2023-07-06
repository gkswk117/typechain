interface SStorage<T> {
    [key:string]:T
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
}
//클래스에 generic을 전달하는 방법
const stringsStorage = new LocalStorage<string>()
stringsStorage.set("첫번째key","rlahwl")
stringsStorage.get("첫번째key")