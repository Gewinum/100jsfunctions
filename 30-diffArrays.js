function diffArrays(numbers1, numbers2) {
    if (numbers1.length < numbers2.length) {
        [numbers1, numbers2] = [numbers2, numbers1];
    }

    const diff = [];

    for (let i = 0; i < numbers1.length; i++) {
        if (!numbers2.includes(numbers1[i])) {
            diff.push(numbers1[i]);
        }

        if (numbers2.length > i && !numbers1.includes(numbers2[i])) {
            diff.push(numbers2[i]);
        }
    }

    return diff;
}

export { diffArrays };