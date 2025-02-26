function getBiggestNumberInArrays(numbers1, numbers2) {
    if (numbers1.length < numbers2.length) {
        const temp = numbers1;
        numbers1 = numbers2
        numbers2 = temp
    }

    let max;

    for (let i = 0; i < numbers1.length; i++) {
        let biggestNumHere = numbers1[i];

        if (numbers2.length > i) {
            if (numbers2[i] > biggestNumHere) {
                biggestNumHere = numbers2[i];
            }
        }

        if (max === undefined) {
            max = biggestNumHere;
        } else if (biggestNumHere > max) {
            max = biggestNumHere;
        }
    }

    return max;
}

export { getBiggestNumberInArrays };