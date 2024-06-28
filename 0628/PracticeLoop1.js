// random value 0-50
const ansValue = Math.floor(Math.random() * 51);
// Debug
console.log("Answer: " + ansValue);
var continueFlag = true;
while (continueFlag) {
    const input = prompt("0-50の値を入力してください");
    // Debug
    if (input === null) {
        alert("あきらめた");
        continueFlag = false;
        break;
    }
    if (isNaN(input)) {
        alert("コラー");
        continue;
    }
    let inputValue;
    try {
        inputValue = parseInt(input);
    } catch (e) {
        alert("コラー");
        continue;
    }
    if (inputValue === ansValue) {
        alert("正解です");
        continueFlag = false;
    } else if (inputValue < ansValue) {
        alert("デカいと");
    } else if (inputValue > ansValue) {
        alert("小さいと");
    }
}
