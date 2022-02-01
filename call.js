let obj = {
    num1 : 100,
    num2 : 200
};
function myFun(arg1,arg2,arg3){
    console.log( arg1+arg2+arg3+this.num1+this.num2 );
};
myFun.call(obj,300,400,500);                //1500
let arr = [300,400,500];
myFun.apply(obj,arr);                       //1500
let newMemory = myFun.bind(obj);
newMemory(300,400,500);                     //1500