// var varName = 10;
// console.log("first",varName);
// function b (){
//     console.log("second",varName);
// }
// function fn(){
//     console.log("line",varName);
//     var varName = 20;
    
//     b();
//     console.log("third",varName);
// }
// fn();
// let varName;//SyntaxError: Identifier 'varName' has already been declared
// const varName=40; // ❌Assign❌ Declare❌
// varName=20;

// let fruits = "apple";
// console.log(fruits);

// {
//     // console.log(fruits);
//     let fruits ;
//     console.log(fruits);
//     fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);

// const a = 10;
// const arr = [1,2,3,4,5];
// // arr.push(10);
// arr.shift();
// console.log(arr);

// let object ={
//     name :"hari",
//     lastname : "Shukla",
//     sayHi: function() {
//         console.log("hi");
//     }
// }
// console.log(object);
// for (let key in object){
//     console.log(key," : ",object[key]);
// }
// object.sayHi();

// let arr= [1,3,4,5,6];
// arr.myprop ="hello";

// arr.Print = function(){
//     console.log("hello from array");
// }
// for (let key in arr){
//     console.log(key, " : ", arr[key]);
// }
// console.log(arr);


function fn(){
    console.log("hello form fn");
}
fn.prop ="property of function";
fn.myfn = function fn(){
    console.log("i am a methd of a function");
}
fn();
fn.myfn();
console.log(fn.prop);

//  function is a object 
// extra feature -> code property that can be executed
// 6 primitive types in JS -> number,String,boolean, undefined, null, symbol






































