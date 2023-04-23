let singlequotes = 'how are you';
let doublequotes = "double fd wswev ";
console.log(singlequotes);
console.log(doublequotes);
let char = doublequotes.charAt(0);
let substr = singlequotes.substring(2,8);
let ascii = singlequotes.charCodeAt(4);
console.log("ascii ",ascii);
console.log(substr);
console.log(char);
singlequotes = singlequotes.trim();
let arrStrr = singlequotes.split(" ");
console.log(arrStrr);
let arrStr = arrStrr.join("+");             //super imoprtant when requestnt send on url script
console.log(arrStr);