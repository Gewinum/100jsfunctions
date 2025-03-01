function biggestPowerOf2(number) {
    if (number === 0) {
        return -1;
    }
    return isNaN(Math.log2(number)) ? -1 : Math.floor(Math.log2(number));
}

export { biggestPowerOf2 };