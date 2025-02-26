function mostRepetitions(string1, string2, letter) {
    if (string1.length > string2.length) {
        [string1, string2] = [string2, string1];
    }

    let repets1 = 0;
    let repets2 = 0;

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] === letter) {
            repets1++;
        }

        if (string2.length > i && string2[i] === letter) {
            repets2++;
        }
    }

    if (repets1 > repets2) {
        return string1;
    } else {
        return string2;
    }
}

export { mostRepetitions };