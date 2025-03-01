function findUniqueNumber(numbers) {
    return numbers.reduce((a, b) => a ^ b);
}

export { findUniqueNumber };