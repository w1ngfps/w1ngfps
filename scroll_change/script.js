const ranks = {
    "アイアン1": 1, "アイアン2": 2, "アイアン3": 3,
    "ブロンズ1": 4, "ブロンズ2": 5, "ブロンズ3": 6,
    "シルバー1": 7, "シルバー2": 8, "シルバー3": 9,
    "ゴールド1": 10, "ゴールド2": 11, "ゴールド3": 12,
    "プラチナ1": 13, "プラチナ2": 14, "プラチナ3": 15,
    "ダイヤモンド1": 16, "ダイヤモンド2": 17, "ダイヤモンド3": 18,
    "アセンダント1": 19, "アセンダント2": 20, "アセンダント3": 21,
    "イモータル1": 22, "イモータル2": 23, "イモータル3": 24
};

const rankColors = {
    "アイアン": "rgb(82, 80, 80)",
    "ブロンズ": "rgb(151, 70, 4)",
    "シルバー": "rgb(172, 164, 164)",
    "ゴールド": "rgb(223, 171, 3)",
    "プラチナ": "rgb(74, 205, 248)",
    "ダイヤモンド": "rgb(172, 40, 172)",
    "アセンダント": "rgb(27, 160, 27)",
    "イモータル": "rgb(228, 10, 83)"
};

// DOMが読み込まれた後にセレクトボックスを作成
document.addEventListener("DOMContentLoaded", () => {
    const selectElements = document.querySelectorAll('.rank-select');
    Object.keys(ranks).forEach(rank => {
        const option = document.createElement('option');
        option.value = ranks[rank];
        option.textContent = rank;
        option.style.color = rankColors[rank.split(/[0-9]+/)[0]]; // 色を設定
        selectElements.forEach(select => select.appendChild(option.cloneNode(true)));
    });
});

// 平均計算のボタンにイベントリスナーを追加
document.getElementById('calculate-btn').addEventListener('click', () => {
    const selectedValues = Array.from(document.querySelectorAll('.rank-select'))
        .map(select => parseInt(select.value));
    const average = selectedValues.reduce((a, b) => a + b, 0) / selectedValues.length;

    // 対応するランクを見つける
    const averageRank = Object.keys(ranks).find(rank => ranks[rank] === Math.round(average));
    const rankGroup = averageRank.split(/[0-9]+/)[0];
    
    // 結果を表示
    const resultElement = document.getElementById('result');
    resultElement.textContent = `平均ランク: ${averageRank}`;
    resultElement.style.color = rankColors[rankGroup];
});
