/*
    let calc = (arg1,arg2,arg3)=>{
        return arg1+arg2+arg3;
    };
    console.log( calc(100,200,300) );
*/

let calc = (arg1)=>{
    return (arg2)=>{
        return (arg3)=>{
            return arg1+arg2+arg3;   
        }
    }
}
console.log( calc(100)(200)(300) );
