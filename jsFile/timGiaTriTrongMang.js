let value = +prompt("Enter a number: ");

let numbers = [-3, 5, 1, 3, 2, 10];

let index = -1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === value){
        index = i;
        break;

    }
}
if (index === -1){
    console.log("Không tìm thấy trong mảng")
}else{
    console.log("Số "+value+" được tìm thấy ở vị trí "+i);
}