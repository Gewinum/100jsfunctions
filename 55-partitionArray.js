function partitionArray(numbers, predicateCallback) {
    return {
        fail: numbers.filter(elem => !predicateCallback(elem)),
        pass: numbers.filter(predicateCallback)
    };
}

export { partitionArray };