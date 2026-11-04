function checkDueDate(dueDate: Date): string {
    const today = new Date();

    if (today > dueDate) {
        return "Late";
    }

    return "On Time";
}

const deadline = new Date("2026-11-10");

console.log(checkDueDate(deadline));