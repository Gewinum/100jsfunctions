function checkSettlesInTime(promise, maxTime) {
    return new Promise(resolve => {
        setTimeout(() => resolve(false), maxTime);
        promise.finally(() => resolve(true));
    });
}

export { checkSettlesInTime };