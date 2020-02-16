function checkSign(num){
    return num > 0 ? "positive" :
            num < 0 ? "negative" : 0;
}

console.log(checkSign(-10));