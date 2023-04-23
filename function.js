function name(received){
    // console.log("you have called a name function",received);
    let vali = Math.random() > 0.5?true:"less than 0.5";
    return vali;
}
let las = name([1,5,6,4]);
console.log(las);