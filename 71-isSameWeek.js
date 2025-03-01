function isSameWeek(date1, date2) {
    if (date2.valueOf() < date1.valueOf()) {
        [date1, date2] = [date2, date1];
    }

    const day1 = date1.getDay() === 0 ? 7 : date1.getDay();
    const day2 = date2.getDay() === 0 ? 7 : date2.getDay();

    return day2 >= day1;
}

export { isSameWeek };