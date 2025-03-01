function throttle(callback) {
    let lastInvocationTime = Date.now() - 1000;

    return (...args) => {
        if (Date.now() - lastInvocationTime < 1000) {
            return;
        }

        lastInvocationTime = Date.now();
        return callback(...args);
    };
}

export { throttle };