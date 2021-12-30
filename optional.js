/*
function fun_one(arg1?:string,arg2?:string,arg3?:string){
    console.log( arg1, arg2, arg3 );
}

fun_one();                              //undefined undefined undefined
fun_one("hello_1")                      //hello_1 undefined undefined
fun_one(undefined,undefined,undefined); //undefined undefined undefined
fun_one(null,null,null);                //null null null
*/
/*
function fun_one(arg1:string,arg2?:string){
    console.log(arg1,arg2);
}
//fun_one();                        //Expected 1-2 arguments, but got 0.
//fun_one("Hello_1");               //Hello_1 undefined
//fun_one(undefined,undefined);     //undefined undefined
//fun_one(null,null);               //null null
*/
/*
function fun_one(arg1?:string,arg2:string){

};

//in combination of normal parameter with optional parameter, optional parameter have second pr
*/
function fun_one(arg1, arg2, arg3) {
    if (arg2 === void 0) { arg2 = "Hello_2"; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    console.log(arg1, arg2, arg3, arg4);
}
//fun_one();                                            //Expected at least 1 arguments, but got 0.
//fun_one("Hello_1");                                   //Hello_1 Hello_2 undefined []
//fun_one("Hello_1",undefined,"Hello_3","Hello_4");     //Hello_1 Hello_2 Hello_3 [ 'Hello_4' ]
//fun_one(undefined,undefined,undefined,undefined);     //undefined Hello_2 undefined [ undefined ]
fun_one(null, null, null, null); //
