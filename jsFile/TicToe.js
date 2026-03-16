let p = document.getElementById("tictoe")
let board = [];
let data = ""

for (let i = 0; i < 5; i++) {
    board[i] = [".",".",".",".","."];
}

for (let i = 0; i < 5; i++) {
    data += "<br>"
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
}
p.innerHTML = data;

let player = 1;


function changeValue(){
    let positionX = prompt("Nhập hàng: ");
    let positionY = prompt("Nhập cột: ");
    if (player % 2 === 0){
        board[positionX][positionY] = "O";
        player++;
    }else {
        board[positionX][positionY] = "X";
        player++;
    }
    data = ""
    for (let i = 0; i < 5; i++) {
        data += "<br>"
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    p.innerHTML = data;

    let gameOver = isGameOver();
    if (gameOver !== null){
        setTimeout(function (){
            alert(`Người chiến thắng là ${gameOver}`);
        },10)
    }

}

function isGameOver() {
    let winCount = 3; // Điều kiện thắng: 3 ô liên tiếp

    // Quét qua từng ô trên bàn cờ
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let current = board[i][j];
            if (current === ".") continue;

            // Kiểm tra hàng NGANG (Đảm bảo j + 2 không bị văng ra khỏi mảng)
            if (j <= 5 - winCount &&
                current === board[i][j+1] &&
                current === board[i][j+2]) {
                return current; // Trả về "X" hoặc "O"
            }

            // Kiểm tra hàng DỌC (Đảm bảo i + 2 không bị văng ra khỏi mảng)
            if (i <= 5 - winCount &&
                current === board[i+1][j] &&
                current === board[i+2][j]) {
                return current;
            }

            // Kiểm tra CHÉO XUÔI (\)
            // (Không được chạm đáy dưới và không chạm mép phải)
            if (i <= 5 - winCount && j <= 5 - winCount &&
                current === board[i+1][j+1] &&
                current === board[i+2][j+2]) {
                return current;
            }

            // Kiểm tra CHÉO NGƯỢC (/)
            // (Không được chạm đáy dưới và không chạm mép trái)
            if (i <= 5 - winCount && j >= winCount - 1 &&
                current === board[i+1][j-1] &&
                current === board[i+2][j-2]) {
                return current;
            }
        }
    }
    return null;
}