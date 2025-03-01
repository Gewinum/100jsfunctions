function linkedNumbersSum(node) {
    let nextNode = node;
    let totalSum = 0;

    while (nextNode !== null) {
        totalSum += nextNode.value;
        nextNode = nextNode.next;
    }

    return totalSum;
}

export { linkedNumbersSum };