function countPageViews(pageViews, country, interval) {
    const startDate = interval.startDate.valueOf();
    const endDate = interval.endDate.valueOf();
    let sum = 0;
    return pageViews.reduce((prevValue, val) => {
        if (val.country !== country) {
            return prevValue;
        }

        const timeIs = val.date.valueOf();

        if (timeIs < startDate || timeIs > endDate) {
            return prevValue;
        }

        return val.count + prevValue;
    }, 0);
}

export { countPageViews };