function isDeepEqual(object1, object2) {
    if (typeof object1 !== typeof object2) {
        return false;
    }

    if (typeof object1 !== "object") {
        return object1 === object2;
    }

    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];

        if (!keys2.includes(key)) {
            return false;
        }

        if (!areValuesEqual(object1[key], object2[key])) {
            return false;
        }
    }

    return true;
}

function isMapEqual(map1, map2) {
    if (!(map1 instanceof Map) || !(map2 instanceof Map)) {
        return false;
    }

    if (map1.size !== map2.size) {
        return false;
    }

    if (map1.size === 0) {
        return true;
    }

    const keys = map1.keys();

    for (let i = 0; i < keys.length; i++) {
        if (!map2.has(keys[i])) {
            return false;
        }

        const val1 = map1.get(keys[i]);
        const val2 = map2.get(keys[i]);
        if (!areValuesEqual(val1, val2)) {
            return false;
        }
    }

    return true;
}

function isArrayEqual(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    if (arr1.length === 0) {
        return true;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!areValuesEqual(arr1[i], arr2[i])) {
            return false;
        }
    }

    return true;
}

function isDateEqual(date1, date2) {
    return date1.valueOf() === date2.valueOf();
}

function areValuesEqual(val1, val2) {
    if (typeof val1 !== typeof val2) {
        return false;
    }

    if (val1 instanceof Map) {
        return isMapEqual(val1, val2);
    } else if (Array.isArray(val1)) {
        return isArrayEqual(val1, val2);
    } else if (val1 instanceof Date) {
        return isDateEqual(val1, val2);
    } else if (typeof val1 === "object") {
        return isDeepEqual(val1, val2);
    } else {
        return val1 === val2;
    }
}

export { isDeepEqual };