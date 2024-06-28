/**
 * 問1, 配列の要素の合計値を計算する
 * @return String message
 */
function q1() {
    let numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce((n, c) => c + n, 0);
    return `合計値: ${sum}`;
}

/**
 * 問2, 配列の最大値と最小値を見つける
 * @return String message
 */
function q2() {
    let numbers = [1, 5, 3, 4, 2];

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `最大値: ${max}\n最小値: ${min}`;
}

/**
 * 問3, 配列の要素を逆順にする
 * @return String message
 */
function q3() {
    let numbers = [1, 2, 3, 4, 5];

    const reverse = numbers.reverse();
    return reverse.join('\n');
}

/**
 * 問4, 配列の平均値を計算する
 * @return String message
*/
function q4() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const average = numbers.reduce((n, c) => c + n, 0) / numbers.length;
    return `平均: ${average}`;
}

/**
 * 問5, 1から100までの数字の素数を表示
 * @return String message
 */
function q5() {
    const primeNumbers = [];
for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primeNumbers.push(i);
    }
    return primeNumbers.join('\n');
}

/**
 * チャレンジ問題, プロンプトからの入力を元に模様を表示
 * @return String message
 */
function q6() {
    let size;
    if (typeof window === 'undefined' || window.prompt === undefined) {
        // readlineで代替
        console.log('数字を入力');
        size = 10; // Workaround
    } else {
        size = window.prompt('数字を入力');
    }

    let pattern = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            pattern += (i + j) % 2 === 0 ? '□' : '■';
        }
        pattern += '\n';
    }

    return pattern;
}

// execute
for (let i = 1; i <= 6; i++) {
    console.log(`--- 問${i} ----------------------`);
    console.log(eval(`q${i}()`));
}
