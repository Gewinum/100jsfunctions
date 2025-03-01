function maxInvocations(count) {
    const callback = (...args) => {
        if (callback.leftInvocations === 0) {
            return;
        }
        callback.leftInvocations -= 1;
        return this(...args);
    }
    callback.leftInvocations = count;
    return callback;
}

export { maxInvocations };