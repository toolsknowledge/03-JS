/*
    for(let i=0;i<10;i++){

    }
    console.log(i);   

    //var : 10
    //ReferenceError: i is not defined

    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/



/*
    //print variable

    //declaration
    //initilization
    //print the variable
    console.log(data);
    let data = 100;

    //var : undefined
    //let : ReferenceError: Cannot access 'data' before initialization
    //accessing variable before its declaration and initilization with var keyword called as 
    //varible hoisting
*/


/*
let data = 100;

{
    let data = 200;  
}

console.log( data );

//var : 200   //let : 100
//if any clock code effect on global member technically called as global polluting issue
//var keyword raised the global polluting issue
//let keyword overcomes the global polluting issue
*/

/*
let data = 100;
let data = 200;
console.log(data);

//var : 200
//let : SyntaxError: Identifier 'data' has already been declared
*/


/*
                    var                                     let

    var keyword introduced in ES1               let keyword introduced in ES6

    var keyword allows the duplicate            let keyword won't allows the duplicate variables
    variables

    variable hoisting issue raised in           we can overcome variable hoisting issue by using let keyword
    var keyword

    global polluting issue raised in var        we can overcome global polluting issue by using let keyword
    keyword

    scope rule break by var keyword             scope rule obey by let keyword

    var members always called as                let members we can call local members 
    global members
*/



// var data = 100;
// {
//     let data = 200;
// }
// console.log(data);


/*
//const
//ES6
//reinitilization not possible
const data = 100;
data = 200;
//TypeError: Assignment to constant variable.
*/

/*
const arr = [10,20,30,40,50];
//arr = [];                           //TypeError: Assignment to constant variable.

arr[0] = 100;
arr[1] = 200;
arr[5] = 600;
console.log(arr);                   //[ 100, 200, 30, 40, 50, 600 ]

arr.pop();
arr.pop();
console.log(arr);                   //[ 100, 200, 30, 40 ]
*/


const obj = {
    "sub_one" : "Angular",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};

//obj = {};           //TypeError: Assignment to constant variable.
obj.sub_one = "Angular13";
obj.sub_two = "Deno";
obj.sub_three = "CassandraDB";
console.log( obj );

//{ sub_one: 'Angular13', sub_two: 'Deno', sub_three: 'CassandraDB' }




























































