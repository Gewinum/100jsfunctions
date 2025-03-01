function debounce(callback) {
    let timeoutId = null;

    return function(...args) {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => callback(...args), 1000);
    };
}

export { debounce };