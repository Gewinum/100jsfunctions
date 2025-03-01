function simpleCompression(text) {
    if (text === "") {
        return "";
    }
    let resultString = "";
    let currentChar = undefined;
    let instances = 0;

    for (let i = 0; i < text.length; i++) {
        if (currentChar === undefined) {
            currentChar = text[i];
            instances++;
            continue;
        }

        if (currentChar !== text[i]) {
            resultString += currentChar + ((instances > 1) ? instances : "");
            currentChar = text[i];
            instances = 1;
        } else {
            instances += 1;
        }
    }

    resultString += currentChar + ((instances > 1) ? instances : "");
    return resultString;
}

export { simpleCompression };