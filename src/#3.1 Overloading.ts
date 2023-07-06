//#3.1 Overloading
type Config = {
  path:string,
  state:number
}
const Config = {
  path:"rlahWl",
  state:1
}
type Push = {
  (path:string):void
  (config:Config):void
}
const testFunc :Push = (config) => {
  // I don't know why this line raises small errors in vscode.
  // https://www.typescriptlang.org/play?#code/Q에서는 에러 안 뜸.
  // => tsconfig.json에서 "strict"를 true로 해주면 에러가 안 뜸.
  if(typeof config==="string"){console.log(config)}
  else{
    console.log(config.path)
  }
}
const substituedFunc = (config:string|Config) => {
  if(typeof config==="string"){
    console.log(config)
  }
  else{
    config.path = "url"
    config.state = 111
    console.log(config)
  }
}
substituedFunc(Config)
