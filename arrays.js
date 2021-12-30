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




















































