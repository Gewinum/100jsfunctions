function areValuesUnique(numbers) {
    return (new Set(numbers)).size === numbers.length;
}

export { areValuesUnique };