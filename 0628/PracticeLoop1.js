// random value 0-50
const ansValue = Math.floor(Math.random() * 51);
console.log("Answer: " + ansValue); // Debug

while (true) {
    const input = prompt("0-50の値を入力してください")

    if (input === null) {
        alert("あきらめた");
        break;
    }

    const inputValue = parseInt(input);

    if (isNaN(inputValue)) {
        alert("コラー");
        continue;
    }

    if (inputValue === ansValue) {
        alert("当たり");
        break;
    } else if (inputValue < ansValue) {
        alert("デカいと");
    } else {
        alert("小さいと");
    }
}

