function arrayToObject(strings) {
    let obj = {}
    strings.forEach((val, ind) => {
        if (Object.keys(obj).includes(val)) {
            return;
        }
        obj[val] = ind;
    })
    return obj;
}

export { arrayToObject };