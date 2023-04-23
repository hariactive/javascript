//object is simply is a group of key value pair
//key: value -> property
//key : function -> method
let obj = {
    name:"hari narayan",
    lastname:"Shukla",
    address:{
        city:"noida",
        pincode:"266666"
    }
    ,
    age:35,
    isAvenger:true,
    movies:["Yet to releases", "late 2025"],
    sayHi: function(){
        console.log("kaise ho aap sb");
    }
};
// delete obj.age
// obj.age = 20;
// console.log("printing " ,obj.age);
// console.log(obj.sayHi());
for(let key in obj){
    console.log(key, " : ", obj[key]);
}
let propkey= "age";
console.log(obj.age);
console.log(obj[propkey]);
console.log(obj["age"])
