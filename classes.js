//class
//collection of "variables" and "functions" called as "class"
//"class" is the keyword, used to "define" the "classes"
//"class" keyword introduced in "ES6"
//we can create object to the class by using "new" keyword
//we will define "constructors" by using "constructor" keyword
//we will refer current class members by using "this" keyword

/*
    class class_one{
        var_one = "Hello_1";
        var_two = "Hello_2";
        var_three = "Hello_3";
    };
    let obj = new class_one();
    console.log( obj.var_one, obj.var_two, obj.var_three );
    //Hello_1 Hello_2 Hello_3
*/


/*
    class class_one{
        #var_one = "Hello_1";
    };
    let obj = new class_one();
    console.log( obj.var_one );             //undefined
*/

/*
    class class_one{
        var1;
        var2;
        constructor(param1,param2){
            this.var1 = param1;
            this.var2 = param2;
        }
    }
    let obj1 = new class_one("hello_1","hello_2");
    console.log( obj1.var1, obj1.var2 );                    //hello_1 hello_2

    let obj2 = new class_one("welcome_1","welcome_2");
    console.log( obj2.var1, obj2.var2 );                    //welcome_1 welcome_2
*/


/*
    class class_one{
        fun_one(){
            return "hello_1";
        }

        fun_two(){
            return "hello_2";
        }

        fun_three(){
            return "hello_3";
        }
    }
    let obj = new class_one();
    console.log( obj.fun_one(), obj.fun_two(), obj.fun_three() );               //hello_1 hello_2 hello_3
*/



/*
class class_one{
    static var_one = "hello_1";

    static fun_one(){
        return "hello_2";
    }
}
console.log( class_one.var_one, class_one.fun_one() );
//hello_1 hello_2

let obj = new class_one();
console.log( obj.var_one, obj.fun_one() );
//static members we can't access by using class objects
*/


class class_one{
    static var_one = "hello_1";

    static fun_one(){
        return this.var_one;
    }

    fun_two(){
        return var_one;
    }
}

console.log( class_one.fun_one() );

let obj = new class_one();
console.log( obj.fun_two() );


























































































































