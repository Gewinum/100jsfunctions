function mergeIntervals(intervals, newIntervals) {
    const allIntervals = ([...intervals, ...newIntervals]).sort((a, b) => a.from - b.from);
    for (let i = 1; i < allIntervals.length; i++) {
        const current = allIntervals[i];
        const previous = allIntervals[i - 1];

        if (previous.to < current.from) {
            continue;
        }

        const united = {
            from: Math.min(current.from, previous.from),
            to: Math.max(current.to, previous.to),
            numbers: ([...current.numbers, ...previous.numbers]).sort((a, b) => a - b)
        };
        allIntervals.splice(i - 1, 2, united);
        i -= 1;
    }
    return allIntervals;
}

export { mergeIntervals };