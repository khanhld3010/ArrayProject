let p = document.getElementById("caroGame")
let board = [];
let data = ""

for (let i = 0; i < 5; i++) {
    board[i] = [0,0,0,0,0];
}

for (let i = 0; i < 5; i++) {
    data += "<br>"
    for (let j = 0; j < 5; j++) {
         data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
}
p.innerHTML = data;

function changeValue(){
    let positionX = prompt("Nhập hàng: ");
    let positionY = prompt("Nhập cột: ");
    board[positionX][positionY] = "x";
     data = ""
    for (let i = 0; i < 5; i++) {
        data += "<br>"
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    p.innerHTML = data;
}