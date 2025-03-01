function rotateArray(items, n) {
    if (items.length === 0) {
        return [];
    }
    n = n % items.length;
    for (let i = 0; i < n; i++) {
        items.unshift(items.pop());
    }
    return items;
}

export { rotateArray };