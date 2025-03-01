function flow(...functions) {
    return function(...args) {
        const initiator = functions.shift();
        let result = initiator(...args);

        functions.forEach(func => {
            result = func(result);
        });

        return result;
    };
}

export { flow };