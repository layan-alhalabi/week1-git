"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculatePercentage(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
function getLetterGrade(percentage) {
    if (percentage >= 90)
        return "A";
    if (percentage >= 80)
        return "B";
    if (percentage >= 70)
        return "C";
    if (percentage >= 60)
        return "D";
    return "F";
}
const scores = [90, 85, 95, 80];
const percentage = calculatePercentage(scores);
const grade = getLetterGrade(percentage);
console.log("Percentage:", percentage);
console.log("Letter Grade:", grade);
//# sourceMappingURL=grade.js.map