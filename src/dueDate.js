"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkDueDate(dueDate) {
    const today = new Date();
    if (today > dueDate) {
        return "Late";
    }
    return "On Time";
}
const deadline = new Date("2026-11-10");
console.log(checkDueDate(deadline));
//# sourceMappingURL=dueDate.js.map