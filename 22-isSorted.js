function isSorted(numbers) {
    let isIncreasing;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === numbers[i - 1]) {
            continue;
        }

        if (numbers[i] > numbers[i - 1]) {
            if (isIncreasing === undefined) {
                isIncreasing = true;
            } else if (!isIncreasing) {
                return false;
            }
        } else {
            if (isIncreasing === undefined) {
                isIncreasing = false;
            } else if (isIncreasing) {
                return false;
            }
        }
    }

    return true;
}

export { isSorted };