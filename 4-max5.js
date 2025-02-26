function max5(nr1, nr2, nr3, nr4, nr5) {
    const list = [nr1, nr2, nr3, nr4, nr5]
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i]
        }
    }

    return max
}

export { max5 };