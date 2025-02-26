function addDays(initialDate, daysCount) {
    return new Date(initialDate.valueOf() + (daysCount * 60 * 60 * 24 * 1000))
}

export { addDays };