function bai1(){
    let a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            document.write(`Dòng ${i} ở vị trí ${j} có giá trị ${a[i][j]} <br>`)
        }
    }
}

function bai2(){
    let array = [ 'c', 's', 'c', '2', '6', '1' ];
    for (let i = 0; i < Math.floor(array.length/2); i++){
        let temp = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = temp;
    }
    let result = array.join("")
    document.write(result)
}

function bai3(){}
function bai4(){
    let stringExp = "Đây là một chuỗi"
    let count=0;
    for (let i = 0; i < stringExp.length; i++){
        count++;
    }
    document.write("Có tổng cộng "+count+" ký tự trong chuỗi")
}
function bai5(){
    let stringA = prompt("Nhập vào chuỗi thứ nhất")
    let stringB = prompt("Nhập vào chuỗi thứ hai")
    if (stringA === stringB){
        document.write("Hai chuỗi bằng nhau")
    }else {
        document.write("Hai chuỗi không bằng nhau")
    }
}
function bai6(){
    let arrayA = ['a', '-', 'b', 'c', '-', 'd', 'e', '-', 'f', 'g']
    let arrayB = []
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] === "-"){
            arrayB.push("_")
        }else {
            arrayB.push(arrayA[i])
        }
    }
    document.write(arrayB.join(""))
}