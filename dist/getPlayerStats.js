"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPlayerStats = (player) => {
    let ranked = "";
    let getScore = player.scores;
    const total = getScore.reduce((acc, currentScore) => acc + currentScore, 0);
    const avg = total / getScore.length;
    if (avg >= 80) {
        ranked = "MVP";
    }
    else {
        ranked = "Rookie";
    }
    return {
        name: player.name,
        average: avg,
        rank: ranked,
    };
};
console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80],
}));
// Expected output:
// { name: "Nova", average: 87.5, rank: "MVP" }
console.log(getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50]
}));
// Expected output: 
// { name: "Zex", average: 58.75, rank: "Rookie" } 
//# sourceMappingURL=getPlayerStats.js.map