function getLongestString(arrayOfStrings) {
    let longestStr = "";

    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > longestStr.length) {
            longestStr = arrayOfStrings[i];
        }
    }

    return longestStr;
}

export { getLongestString };