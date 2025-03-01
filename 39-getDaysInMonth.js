function getDaysInMonth(date) {
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDate.getDate() - firstDate.getDate() + 1;
}

export { getDaysInMonth };