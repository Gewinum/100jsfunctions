function ascendingSplit(numbers) {
    if (numbers.length === 0) {
        return [];
    }
    const splitted = [];
    let existing = [];

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (existing.length === 0) {
            existing.push(num);
            continue;
        }

        if (num >= existing[existing.length - 1]) {
            existing.push(num);
        } else {
            splitted.push(existing);
            existing = [num];
        }
    }

    splitted.push(existing);

    return splitted;
}

export { ascendingSplit };