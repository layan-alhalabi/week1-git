export type LetterGrade = "A" | "B" | "C" | "D" | "F";

export function calculatePercentage(scores: number[]): number {
    if (scores.length === 0) {
        throw new Error("Scores cannot be empty");
    }

    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

export function getLetterGrade(percentage: number): LetterGrade {
    if (percentage >= 90) return "A";
    if (percentage >= 80) return "B";
    if (percentage >= 70) return "C";
    if (percentage >= 60) return "D";
    return "F";
}