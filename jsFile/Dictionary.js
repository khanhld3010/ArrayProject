function translateDic(){
    let dicEng = ["Cat","Dog","Mouse","Home"]
    let dicVn = ["Mèo","Chó","Chuột","Nhà"]
    let text = document.getElementById("english")
    let result = document.getElementById("result")
    let hidden;
    let isFound = false;
    for (let i = 0; i < dicEng.length; i++) {
        if (dicEng[i] === text.value){
            hidden = dicVn[i]
            isFound = true;
            break;
        }
    }
    if (isFound === true){
        result.innerText = hidden;
    }else {
        result.innerText = "Không tìm thấy";
    }
}