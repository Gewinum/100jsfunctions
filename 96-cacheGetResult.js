function cacheGetResult(getPromise) {
    let resolvedVal = undefined;
    return () => {
        return new Promise(resolve => {
            if (resolvedVal !== undefined) {
                resolve(resolvedVal);
                return;
            }

            getPromise()
                .then(data => {
                    resolvedVal = data;
                    resolve(data);
                });
        });
    };
}

export { cacheGetResult };