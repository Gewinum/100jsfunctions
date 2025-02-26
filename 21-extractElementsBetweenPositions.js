function extractElementsBetweenPositions(numbers, n, m) {
    if (n > m) {
        [n, m] = [m, n]
    }

    return numbers.splice(n, m - n + 1);
}

export { extractElementsBetweenPositions };