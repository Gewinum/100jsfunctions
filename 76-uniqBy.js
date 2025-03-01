function uniqBy(identity) {
    const result = [];
    const checked = [];

    this.forEach(elem => {
        const identityResult = identity(elem);
        if (checked.includes(identityResult)) {
            return;
        }
        result.push(elem);
        checked.push(identityResult);
    });

    return result;
}

export { uniqBy };