function bai1(){
    let mangSoNguyen = [15, 2, 68, 4, 9, 10, 23, 7, 50, 11];
    let count =0;
    for(let i = 0; i < mangSoNguyen.length; i++){
        if (mangSoNguyen[i] >=10){
            count++;
        }
    }
    document.write(`có tổng cộng ${count} số lớn hơn hoặc bằng 10`)
}

function bai2(){
    let mangSoNguyen = [15, 2, 68, 4, 9, 10, 23, 7, 50, 11];
    let max = mangSoNguyen[0];
    let index =0;
    for (let i = 0; i < mangSoNguyen.length; i++){
        if (mangSoNguyen[i] > max){
            max = mangSoNguyen[i];
            index =i;
        }
    }
    document.write(`Số lớn nhất trong mảng là ${max} ở vị trí ${index}`)
}

function bai3(){
    let mangSoNguyen = [15, 2, 68, 4, 9, 10, 23, 7, 50, 11];
    let max = mangSoNguyen[0];
    let sum = 0;
    for (let i = 0; i < mangSoNguyen.length; i++){
        sum += mangSoNguyen[i];
        if (mangSoNguyen[i] > max){
            max = mangSoNguyen[i];
        }
    }
    let avg = sum/mangSoNguyen.length;
    document.write(`trung bình bằng: ${avg} , số lớn nhất bằng ${max}`)
}

function bai4(){
    let mangSoNguyen = [15, 2, 68, 4, 9, 10, 23, 7, 50, 11];
    for (let i = 0; i < Math.floor( mangSoNguyen.length/2); i++){
       // so dau = temp , so dau = so cuoi , so cuoi = temp
        let temp = mangSoNguyen[i];
        mangSoNguyen[i] = mangSoNguyen[mangSoNguyen.length-1-i];
        mangSoNguyen[mangSoNguyen.length-1-i] = temp;
    }
    document.write(mangSoNguyen);
}

function bai5(){
    let mangData = [42, -15, 8, -33, 0, 19, -47,
        25, 50, -5, -28, 11, -3, 37, -19, 4, 22, -41, 14, -9];
    let count =0;
    for (let i = 0; i < mangData.length; i++){
        if (mangData[i] < 0){
            count++;
        }
    }
    document.write(`có tổng cộng ${count} số âm trong mảng`)

}

function bai6(){
    let mangSoNguyen = [15, 2, 68, 4, 9, 10, 23, 7, 50, 11];
    let inputNumber = prompt("Nhập vào một số")
    let isFound = false;
    let index = 0;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] === +inputNumber) {
            isFound = true;
            index = i;
        }
    }
    if (isFound){
        document.write(`Số ${inputNumber} được tìm thấy ở vị trí ${index}`)
    }else {
        document.write(`Không tìm thấy số ${inputNumber}`)
    }
}

function bai7(){
    let mangSoNguyen = [15, 2, 68, 4, 9, 10, 23, 7, 50, 11];
    let inputNumber = prompt("Nhập vào một số")
    let isFound = false;
    let index = 0;
    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] === +inputNumber) {
            mangSoNguyen.splice(i, 1);
            mangSoNguyen.push(0)
        }
    }
    document.write(mangSoNguyen);
}

function bai8(){
    let mangSoNguyen = [15, 2, 68, 4, 9, 10, 23, 7, 50, 11];
    for (let i = 0; i < mangSoNguyen.length; i++){
        for (let j = i+1; j < mangSoNguyen.length; j++){
            if (mangSoNguyen[i] > mangSoNguyen[j]){
                let tmp = mangSoNguyen[i]
                mangSoNguyen[i] = mangSoNguyen[j]
                mangSoNguyen[j] = tmp;
            }
        }
    }
    console.log(mangSoNguyen);
    document.write(mangSoNguyen)
}

function bai9(){
    let mangSoNguyenA = [12, -5, 8, 23, 0, 17, -9, 4, 31, 6]
    let mangSoNguyenB = [7, 19, -3, 25, 11, -14, 2, 9, 30, -6]
    let mangSoNguyenC;
    mangSoNguyenC = mangSoNguyenA.concat(mangSoNguyenB);
    document.write(mangSoNguyenC)
}