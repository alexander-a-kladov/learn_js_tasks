'use strict'

function add(digit1, digit2)
{
    return BigInt(digit1)+BigInt(digit2);    
}

function sub(digit1, digit2)
{
    return BigInt(digit1)-BigInt(digit2);    
}

function mul(digit1, digit2)
{
    return BigInt(digit1)*BigInt(digit2);    
}

function div(digit1, digit2)
{
    return BigInt(digit1)/BigInt(digit2);    
}

let digit1=Math.pow(2,53)-1, digit2=Math.pow(2,53)-1;
console.log(digit1,"+", digit2,'=');
console.log(add(digit1,digit2));
console.log(digit1,"-", digit2,'=');
console.log(sub(digit1,digit2));
console.log(digit1,"*", digit2,'=');
console.log(mul(digit1,digit2));
console.log(digit1,"/", digit2,'=');
console.log(div(digit1,digit2));