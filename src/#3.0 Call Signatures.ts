//#3.0 Call Signatures
//nico's way
//type Add = (a:number, b:number) => number

//docs' way
type Add ={
    (a:number,b:number):number
}
const addd: Add=(n,m) =>{
    return n+m
}

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
  
  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";
  
  doSomething(myFunc);
