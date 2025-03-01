function objectToMap(object) {
    const map = new Map();

    Object.keys(object).forEach(key => {
        const val = object[key];

        if (typeof val === "object" && !Array.isArray(val)) {
            map.set(key, objectToMap(val));
        } else if (Array.isArray(val)) {
            map.set(key, arrayAnalysis(val))
        } else {
            map.set(key, val);
        }
    });

    return map;
}

function arrayAnalysis(arr) {
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (typeof val === "object" && !Array.isArray(val)) {
            arr[i] = objectToMap(val);
        } else if (Array.isArray(val)) {
            arr[i] = arrayAnalysis(val);
        }
    }
    return arr;
}

export { objectToMap };