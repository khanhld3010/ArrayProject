
let array = Array();
let x= 0
let hiddenText = document.getElementById("hiddenText");

function addNumberToArray(){
    let numbers = +document.getElementById("number").value;
    array[x] = numbers;
    hiddenText.innerHTML = "Số " +numbers+ " đã được thêm vào mảng ở vị trí " +x;
    x++;
}

function displayNumberToArray(){
    let index = 0
    array.forEach((item) => {
        document.getElementById("result").innerHTML +="Element "+index+ ": " +item + "<br>";
        index++;
    })
}