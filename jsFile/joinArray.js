let myColor = ["Red", "Green", "White", "Black"];

let newArray = myColor.join(", ")
console.log(newArray);



let numberArray = [0,2,5,4,6,8];
let newArray2 = [numberArray[0]];
let result ;
for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i-1] % 2===0 && numberArray[i]%2 === 0) {
        newArray2.push("-");
        newArray2.push(numberArray[i]);
    }
    else {
        newArray2.push(numberArray[i]);
    }
}
result = newArray2.join("");
console.log(result);


let inputString = 'The Quick Brown Fox';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result3 = [];
for (var i = 0; i < inputString.length; i++) {
    if (UPPER.indexOf(inputString[i]) !== -1) {
        result3.push(inputString[i].toLowerCase());
    }else if (LOWER.indexOf(inputString[i]) !== -1){
        result3.push(inputString[i].toUpperCase());
    }else {
        result3.push(inputString[i]);
    }
}
console.log(result3.join(""));

