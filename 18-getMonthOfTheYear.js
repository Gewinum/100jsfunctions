function getMonthOfTheYear(date) {
    const options = { month: "long" };
    return (new Intl.DateTimeFormat("en-US", options).format(date));
}

export { getMonthOfTheYear };