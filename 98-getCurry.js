function getCurry(callback) {
    const func = (...params) => {
        if (params.length === 0) {
            return callback();
        }

        return function innerFunc(a) {
            if (a === undefined) {
                return callback(...params);
            }

            return func(...params, a);
        };
    };

    return func;
}

export { getCurry };