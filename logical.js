// +
console.log( 10+10 );               //20
console.log( 10+"10" );             //1010
console.log( 10+ +"10");            //20
console.log( +"10" + +"10"+ +"10" );//30
//left to right
console.log( "10"+20+30 );          //102030
console.log( 10 - "10" );           //0
console.log( 10 * "10" );           //100
console.log( 10 / "10" );           //1


//left to right
console.log( 10>9>8 );          //false
console.log( 3 < 2 < 1);        //true


//==   (values)
//=== (value with datatype)
console.log( 10 == "10" );          //true
console.log( 10 === "10" );         //false
console.log( 1 == "one" );          //false
console.log( 1 === "one" );         //false


console.log( 0.1+0.2 );             //0.30000000000000004
console.log( 0.1+0.2 == 0.3 );      //false
console.log( 0.1+0.2 === 0.3 );     //false


//true -- 1
//false -- 0
console.log( true + true );             //2
console.log( true + false );            //1
console.log( true / true );             //1
console.log( true / false );            //Infinity
console.log( "true" + true );           //truetrue
console.log( "true" - "true" );         //NaN

//BODMAS
//B - BRACKET
//O - OF
//D - DIVISION
//M - MULTIPLICATION
//A - ADDITION
//S - SUBTRACTION

console.log( true + true / true + true );
//3

console.log( (true + true) / (true + true) );       //1

console.log( (true+true) / (true-false) );          //2


// & -- if "both" are "true" then result is "true"
// | -- if anyone is "true" then result is "true"
// ^ -- if both are "opposite" theb result is "true"
console.log( 1&1 );                         //1
console.log( 1&0 );                         //0
console.log( 0&1 );                         //0
console.log( 0&0 );                         //0

console.log( 1 | 1 );                       //1
console.log( 0 | 1 );                       //1
console.log( 1 | 0 );                       //1
console.log( 0 | 0 );                       //0


console.log( 1 ^ 1 );                       //0
console.log( 0 ^ 0 );                       //0
console.log( 1 ^ 0 );                       //1
console.log( 0 ^ 1 );                       //1








































