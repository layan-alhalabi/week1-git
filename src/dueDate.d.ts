export function checkDueDate(dueDate: Date, today: Date = new Date()): string {
    if (today > dueDate) {
        return "Late";
    }

    return "On Time";
}