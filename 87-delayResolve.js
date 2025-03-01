function delayResolve(promise, millis) {
    return new Promise(resolve => {
        let resolvedValue = "waiting";
        setTimeout(() => {
            if (resolvedValue === "waiting") {
                resolvedValue = "instant";
            } else {
                resolve(resolvedValue);
            }
        }, millis);
        promise.then((resolved) => {
            if (resolvedValue === "instant") {
                resolve(resolved);
            } else {
                resolvedValue = resolved;
            }
        });
    });
}

export { delayResolve };