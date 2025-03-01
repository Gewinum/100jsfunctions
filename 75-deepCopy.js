function deepCopy(object) {
    const newObj = {};

    Object.keys(object).forEach(objKey => {
        newObj[objKey] = processVal(object[objKey]);
    });

    return newObj;
}

function copyArray(arr) {
    const newArr = [];

    arr.forEach(val => {
        newArr.push(processVal(val));
    });

    return newArr;
}

function copyMap(map) {
    const newMap = new Map();

    map.keys().forEach(objKey => {
        newMap.set(objKey, processVal(map.get(objKey)));
    });

    return newMap;
}

function processVal(val) {
    if (Array.isArray(val)) {
        return copyArray(val);
    } else if (val instanceof Map) {
        return copyMap(val);
    } else if (typeof val === "object") {
        return deepCopy(val);
    } else {
        return JSON.parse(JSON.stringify(val));
    }
}

export { deepCopy };