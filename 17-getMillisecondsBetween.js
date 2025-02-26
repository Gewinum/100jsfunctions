function getMillisecondsBetween(date1, date2) {
    return Math.abs(date2.valueOf() - date1.valueOf());
}

export { getMillisecondsBetween };