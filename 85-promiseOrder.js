function promiseOrder(promises) {
    return new Promise((resolve) => {
        const grouping = [];

        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];
            promise.then(() => {
                grouping.push(i);
                if (grouping.length === promises.length) {
                    resolve(grouping);
                }
            });
        }
    });
}

export { promiseOrder };