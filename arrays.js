/*
    array
    *****
        collection of "elements" called as "array"

        index starts from "0"

        []
*/

/*
    let arr = [10,20,30,40,50];
    console.log( arr[0], arr[1], arr[2], arr[3], arr[4] );              //10 20 30 40 50
    console.log( arr[-1],arr[5],arr[100] );                             //undefined undefined undefined
*/



/*
    //length
    //used to know the "length" of "array"
    let arr = [10,20,30,40,50];
    console.log( arr.length );          //5
    let arr1 = [10,20];
    arr1[2] = 30;
    console.log(arr1.length);               //3
    arr1[100] = 1000;
    console.log(arr1.length);               //101

    let arr2 = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr2.length);                       //10
    arr2.length = 5;
    console.log( arr2[0],arr2[4],arr2[5],arr2[9],arr2[100] );
                            //10 50 undefined undefined undefined
*/


/*
    //delete
    //delete the particular element
    //Note : memory not released by empty element
    let arr = [10,20,30,40,50];
    delete arr[4];
    console.log(arr.length);            //5
    delete arr[0];
    console.log(arr.length);            //5
    console.log(arr);                   //[ <1 empty item>, 20, 30, 40, <1 empty item> ]
*/




/*
//push()
//pop()
//unshift()
//shift()
let arr = [20,30,40];
console.log( arr );         //[ 20, 30, 40 ]
arr.push(50);               
console.log(arr);           //[ 20, 30, 40, 50 ]
arr.unshift(10);
console.log(arr);           //[ 10, 20, 30, 40, 50 ]
arr.pop();
console.log(arr);           //[ 10, 20, 30, 40 ]
arr.shift();
console.log(arr);           //[ 20, 30, 40 ]
*/



/*
    //splice()
    let arr = [10,20,30,40,50,60,70,80,90,100];
    arr.splice(4,3);
    console.log(arr);   //[10,20,30,40,80,90,100]
    arr.splice(6,1);
    console.log(arr);   //[ 10, 20, 30, 40, 80, 90 ]
    arr.splice(0,1);
    console.log(arr);   //[ 20, 30, 40, 80, 90 ]
    arr.splice(1,1);
    console.log(arr);   //[ 20, 40, 80, 90 ]
    arr.splice(2,0,50,60,70);
    console.log(arr);   //[20, 40, 50, 60,70, 80, 90]
    arr.splice(1,0,30);
    console.log(arr);   //[20, 30, 40, 50, 60,70, 80, 90]
    arr.splice(0,1,10,20);
    console.log(arr);       //[10, 20, 30, 40, 50, 60,70, 80, 90]
    arr.splice(9,0,100);
    console.log(arr);       //[10, 20, 30, 40, 50, 60,70, 80, 90,100]
    arr.splice(1);
    console.log(arr);    //[10]

    let arr1 = [10, 20, 30, 40, 50, 60,70, 80, 90,100];
    //arr1.splice(-4,2);
    //console.log(arr1);

    arr1.splice(-4,-2);
    console.log(arr1);      //[10, 20, 30, 40, 50, 60,70, 80, 90,100]
*/


/*
    //slice()
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr.slice(2,4) );                  //[ 30, 40 ]
    console.log( arr.slice(5,8) );                  //[ 60, 70, 80 ]
    console.log( arr.slice(-10,-8) );               //[ 10, 20 ]
    console.log( arr.slice(-2) );                   //[ 90, 100 ]
*/


/*
// spread operator
// concat
// immutability
//deep cloning
// ...

//concat
let arr1 = [10,20,30];
let arr2 = [40,50,60];
console.log( [...arr1,...arr2] );


//immutability
let grand = ["5acrs"];
let father = [...grand,"5acrs"];
let child = [...father,"10acrs"];
console.log(child);             //[ '5acrs', '5acrs', '10acrs' ]


//deep cloning
let c1 = [10,20,30];
let xerox = [...c1];
c1.push(40);
xerox.push(50);[ 10, 20, 30, 50 ]
console.log(c1);                        //[ 10, 20, 30, 40 ]
console.log(xerox);                     //


let arr = [10,20,30,40,50,60];
//[40,50,60,10,20,30]

let x = arr.slice(3);
let y = arr.slice(0,3);
console.log( [...x,...y] );
*/


/*
//findIndex()
let arr = [10,20,30,40,50,60];
console.log(
    arr.findIndex((element,index)=>{
        return element === 30;
    })
);              //2

console.log(
    arr.findIndex((element,index)=>{
        return element == 60;
    })
);          //5

console.log(
    arr.findIndex((element,index)=>{
        return element === 100;
    })
);          //-1

arr.splice(arr.findIndex((element,index)=>{
    return element == 20;
}),1);

console.log(arr);       //[ 10, 30, 40, 50, 60 ]


arr.splice(arr.findIndex((element,index)=>{
    return element == 50;
}),1);

console.log(arr);



let arr1 = [{"cost":"100 INR"},
            {"cost":"200 INR"},
            {"cost":"300 $"},
            {"cost":"400 INR"},
            {"cost":"500 INR"}];
arr1.splice(arr1.findIndex((element,index)=>{
    return element.cost == "300 $";
}),1);
console.log( arr1 );
*/


/*
    //map()
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;   
        })
    );
    //[ 100, 200, 300, 400, 500 ]

    console.log(
        [1,2,3,4,5].map(element=>element*10)
    );
    //[ 10, 20, 30, 40, 50 ]
*/


/*
    //filter()
    console.log(
        [1,2,3,4,5].filter((element,index)=>{
            return element>=3;
        })
    );
    //[ 3, 4, 5 ]

    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        }).filter((element,index)=>{
            return element>=600;
        })
    );
*/


/*
console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);
//15


console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    },100)
);
//115



console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element>=300;
    }).reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);

//1200
*/


/*
//reduceRight()
console.log(
    ["ES11","To","Welcome"].reduceRight((firstElement,nextElement)=>{
        return firstElement+" "+nextElement;      
    })
);
//Welcome To ES11
*/



/*
console.log(
    [1,[2],[3],[4]].flat(1)
);

//[ 1, 2, 3, 4 ]

console.log(
    [[[[1]]],[[[[[[[2]]]]]]],[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]].flat(Infinity)
);

//[ 1, 2, 3 ]
*/



/*
let arr1 = [1,2,3];
let arr2 = ["one","two","three"]
//[[1,"one"],[2,"two"],[3,"three"]]
//[1,"one",2,"two",3,"three"]

console.log(
    arr1.flatMap((element,index)=>{
        return [ element,arr2[index] ]
    })
);
//[ 1, 'one', 2, 'two', 3, 'three' ]
*/



/*
let arr1 = [1,2,3,1,2,3];
// arr1.forEach((element,index)=>{
//     console.log( arr1.indexOf(element) );
// })

console.log(
    arr1.filter((element,index)=>{
        return arr1.indexOf(element) === index;
    })
);
*/


/*
    //sort()
    //ascending / descending
    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg1-arg2;
        })
    );

    //[ 1, 2, 3, 4, 5 ]


    console.log(
        [5,1,2,4,3].sort((arg1,arg2)=>{
            return arg2-arg1;
        })
    );
    //[ 5, 4, 3, 2, 1 ]


    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg1-arg2
        })[1]
    );          //2


    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg2-arg1;
        })[1]
    );          //4 
*/




/*

//reverse()
//used to reverse the array elements
console.log(
    [1,2,3,4,5].reverse()
);
//[ 5, 4, 3, 2, 1 ]


console.log(
    Array.from("Hello").reverse().toString().replaceAll(",","")
);

//[ 'H', 'e', 'l', 'l', 'o' ]
//[ 'o', 'l', 'l', 'e', 'H' ]
//o,l,l,e,H
//ol,l,e,H
//olleH


let arr = ["Angular","React","NodeJS","VueJS"];
//Res 1: ["VueJS","NodeJS","React","Angular"]
//Res 2: ["ralugnA","tcaeR","SJedoN","SJeuV"]
//Res 3: ["SJeuV","SJedoN","tcaeR","ralugnA"]

*/



console.log(
    "welcome to fullstack ui".substr(0,7)
);

//welcome



console.log(
    "welcome to fullstack ui".substr(1,2)
);

//el

console.log(
    "welcome to fullstack ui".substr(-2,2)
);

//ui



console.log(
    "welcome to es6".substring(0,7)
);
//welcome


console.log(
    "welcome to es6".substring(8,10)
);



console.log(
    "welcome to es6".substring(11)
);          //es6




//forEach()
["Hello_1","Hello_2"].forEach((element,index)=>{
    console.log(element);
});


for(let element of ["Hello_1","Hello_2"]){
    console.log(element);
}


let obj = {
    "key1":"Hello_1",
    "key2":"Hello_2",
    "key3":"Hello_3"
};

for(let key in obj){
    console.log( obj[key] );
}





























































































































































































































































