import { describe, it, expect } from "vitest";
import { checkDueDate } from "../src/dueDate";

describe("Due Date Tests", () => {
    it("returns Late when the due date is in the past", () => {
        const today = new Date("2026-11-05");
        const dueDate = new Date("2026-11-04");
        expect(checkDueDate(dueDate, today)).toBe("Late");
    });

    it("returns On Time when the due date is in the future", () => {
        const today = new Date("2026-11-05");
        const dueDate = new Date("2026-11-10");
        expect(checkDueDate(dueDate, today)).toBe("On Time");
    });

    it("returns On Time when today equals the due date", () => {
        const today = new Date("2026-11-05");
        const dueDate = new Date("2026-11-05");
        expect(checkDueDate(dueDate, today)).toBe("On Time");
    });
});
