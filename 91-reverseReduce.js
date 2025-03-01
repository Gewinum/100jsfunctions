function reverseReduce(callbackFn, initialValue) {
    let val = initialValue ?? this[this.length - 1];

    let startIndex = this.length - 1;
    if (initialValue === undefined) {
        startIndex -= 1;
    }

    for (let i = startIndex; i >= 0; i--) {
        val = callbackFn(val, this[i], i)
    }

    return val;
}

export { reverseReduce };