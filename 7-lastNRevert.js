function lastNRevert(text, n) {
    return text.substring(text.length - n).split("").reverse().join("");
}

export { lastNRevert };