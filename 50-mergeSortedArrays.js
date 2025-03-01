function mergeSortedArrays(numbers1, numbers2) {
    const resulting = [];

    let i = 0;
    let j = numbers2.length - 1;

    while (numbers1.length > i || j >= 0) {
        let num1, num2;
        if (numbers1.length > i) {
            num1 = numbers1[i];
        }
        if (j >= 0) {
            num2 = numbers2[j];
        }
        if (num1 !== undefined && num2 !== undefined) {
            if (num1 > num2) {
                resulting.push(num2);
                j -= 1;
            } else {
                resulting.push(num1);
                i += 1;
            }
        } else if (num1 !== undefined) {
            resulting.push(num1);
            i += 1;
        } else {
            resulting.push(num2);
            j -= 1;
        }
    }

    return resulting;
}

export { mergeSortedArrays };