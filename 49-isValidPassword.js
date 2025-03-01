function isValidPassword(password) {
    const regexes = [
        {
            "minimal": 3,
            "regex": /[A-Z]/g
        },
        {
            "minimal": 1,
            "regex": /\d/g
        },
        {
            "minimal": 1,
            "regex": /_|!|\?|\*/g
        }
    ];

    for (let i = 0; i < regexes.length; i++) {
        const regexInfo = regexes[i];
        const matches = Array.from(password.matchAll(regexInfo.regex));
        if (matches.length < regexInfo.minimal) {
            return false;
        }
    }

    return true;
}

export { isValidPassword };