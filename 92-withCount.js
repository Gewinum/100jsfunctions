function withCount() {
    const callback = (...args) => {
        callback.count += 1;
        return this(...args);
    }
    callback.count = 0;
    return callback;
}

export { withCount };