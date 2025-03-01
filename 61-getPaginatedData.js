function getPaginatedData(users, sortBy, direction, perPage, pageNumber) {
    if (users.length === 0) {
        return [];
    }

    if (typeof users[0][sortBy] === "string") {
        users.sort(sortStrings(sortBy, direction));
    } else {
        users.sort(sortNums(sortBy, direction));
    }

    const minimalIndex = ((pageNumber - 1) * perPage);
    const maximalIndex = minimalIndex + perPage;

    return users.slice(minimalIndex, maximalIndex);
}

function sortStrings(prop, direction) {
    if (direction === "asc") {
        direction = 1;
    } else {
        direction = -1;
    }
    return (a, b) => {
        const varA = a[prop].toUpperCase();
        const varB = b[prop].toUpperCase();
        if (varA < varB) {
            return -1 * direction;
        }
        if (varA > varB) {
            return 1 * direction;
        }

        return 0;
    };
}

function sortNums(prop, direction) {
    if (direction === "asc") {
        return (a,b) => a[prop] - b[prop]
    } else {
        return (a,b) => b[prop] - a[prop]
    }
}

export { getPaginatedData };
