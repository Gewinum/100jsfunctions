function searchMessages(messages, searchTerm) {
    return messages.filter(elem => countMatches(elem.body, searchTerm) !== 0).sort(customSort(searchTerm));
}

function customSort(searchTerm) {
    return function(a, b) {
        const matchesA = countMatches(a.body, searchTerm);
        const matchesB = countMatches(b.body, searchTerm);
        if (matchesB !== matchesA) {
            return matchesB - matchesA;
        }
        if (a.sentAt.valueOf() > b.sentAt.valueOf()) {
            return -1;
        }
        if (b.sentAt.valueOf() > a.sentAt.valueOf()) {
            return 1;
        }
    };
}

function countMatches(message, searchTermRaw) {
    const searchTerms = searchTermRaw.split(" ");
    let counts = 0;

    searchTerms.forEach(term => {
        const regex = new RegExp(term, "g");
        counts += Array.from(message.matchAll(regex)).length * term.length;
    });

    return counts;
}

export { searchMessages };