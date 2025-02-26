function everyNPositions(message, step) {
    let newStr = "";

    for (let i = 0; i < message.length; i += step) {
        newStr += message[i];
    }

    return newStr;
}

export { everyNPositions };