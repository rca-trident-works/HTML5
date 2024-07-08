// 問1: prefectureクラスの要素を全て出力
function q1() {
    const prefecture = document.querySelectorAll('.prefecture');
    prefecture.forEach((item) => {
        console.log(item);
    });
}

// 問2: 問1のリストの三重県の文字を赤色に
function q2() {
    const prefecture = document.querySelectorAll('.tokai');
    prefecture.forEach((item) => {
        if (item.textContent === '三重県') {
            item.style.color = 'red';
        }
    });
}

// 問3: 問1のリストの神奈川県を福井県に変更
function q3() {
    const prefecture = document.querySelectorAll('.hokuriku');
    prefecture.forEach((item) => {
        console.log(item);
        if (item.textContent === '神奈川県') {
            item.textContent = '福井県';
        }
    });
}

// 問4: 問1のリストのul要素内のhokurikuクラスのテキストのみ文字の色を青色に
function q4() {
    const prefecture = document.querySelectorAll('.hokuriku');
    prefecture.forEach((item) => {
        // li要素じゃなければスキップ
        if (item.tagName !== 'LI') {
            return;
        }
        item.style.color = 'blue';
    });
}
    
    
q1();
q2();
q3();
q4();
