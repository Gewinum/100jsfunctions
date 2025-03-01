function pickNested(data, path) {
    const parts = path.split(".");
    let specificObject = data;
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (typeof specificObject === "string" || typeof specificObject === "number") {
            return undefined;
        }
        specificObject = specificObject[part];
        if (specificObject === undefined) {
            return undefined;
        }
    }
    return specificObject;
}

export { pickNested };