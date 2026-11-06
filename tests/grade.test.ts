import { describe, it, expect } from "vitest";
import { calculatePercentage, getLetterGrade } from "../src/grade";

describe("Grade Tests", () => {
    it("calculates the average correctly", () => {
        expect(calculatePercentage([90, 80, 70])).toBe(80);
    });

    it("calculates a single score", () => {
        expect(calculatePercentage([95])).toBe(95);
    });

    it("throws an error for empty scores", () => {
        expect(() => calculatePercentage([])).toThrow("Scores cannot be empty");
    });

    it("returns A for percentage 90 or above", () => {
        expect(getLetterGrade(90)).toBe("A");
    });

    it("returns B for percentage 80", () => {
        expect(getLetterGrade(80)).toBe("B");
    });

    it("returns F for percentage below 60", () => {
        expect(getLetterGrade(59)).toBe("F");
    });
});


