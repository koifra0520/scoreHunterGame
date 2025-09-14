let turn = 0;

let score1 = 100;
let score2 = 100;

let arr = [
    [20, -10, 30, "×2", 40],
    [50, 60, -20, -30, "÷2"],
    [70, -10, 80, 90, 10],
    [15, -20, "÷2", 25, -30],
    ["×2", -20, 35, 10, 5]
];

const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

map = shuffleArray(arr);
for (let i = 0; i < 5; i++) {
    map[i] = shuffleArray(map[i]);
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        const btn = document.createElement("input");
        btn.type = "button";
        btn.setAttribute("class", "square");
        btn.addEventListener("click", () => {
            if (btn.value != "") {
                return;
            }
            btn.value = map[i][j];
            if (map[i][j] == "×2" || map[i][j] > 0) {
                btn.setAttribute("class", "square red");
            } else if (map[i][j] == "÷2" || map[i][j] < 0) {
                btn.setAttribute("class", "square blue");
            }
            if (turn == 0) {
                if (map[i][j] == "×2") {
                    score1 = score1 * 2;
                } else if (map[i][j] == "÷2" && score1 > 100) {
                    score1 = (score1 - score1 % 2) / 2;
                } else if (map[i][j] != "÷2") {
                    score1 = score1 + map[i][j];
                }
                document.querySelector("#score1").textContent = score1;
            } else if (turn == 1) 
                if (map[i][j] == "×2") {
                    score2 = score2 * 2;
                } else if (map[i][j] == "÷2" && score2 > 100) {
                    score2 = (score2 - score2 % 2) / 2;
                } else if (map[i][j] != "÷2") {
                    score2 = score2 + map[i][j];
                }
                document.querySelector("#score2").textContent = score2;
            turn = (turn + 1) % 2;
            document.querySelector("#player").textContent = turn + 1;
        });
        document.querySelector("#board").append(btn);
    }
}
