/*
    console.log( "1234567891".match(/^\d{10}$/) );              //[ '1234567891', index: 0, input: '1234567891', groups: undefined ]
    console.log( "123456789".match(/^\d{10}$/) );               //null
*/


/*
    console.log( "samba.pendela@gmail.com".match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) );
    console.log( "samba.pendelagmail.com".match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) );             //null
*/


/*
    console.log( "341111111111111".match(/^(?:3[47][0-9]{13})$/) );
    console.log( "331111111111111".match(/^(?:3[47][0-9]{13})$/) );                                                 //null
*/


console.log("123abcABC".match(/^[0-9a-zA-Z]+$/));                                                               
console.log("$#123abcABC".match(/^[0-9a-zA-Z]+$/));                 //null