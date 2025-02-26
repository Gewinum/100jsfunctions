function pickFields(data, fields) {
    let newObj = {};

    fields.forEach(val => {
        if (Object.keys(data).includes(val)) {
            newObj[val] = data[val];
        }
    });
    return newObj;
}

export { pickFields };