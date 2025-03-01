function groupBirthdays(users, groupBy) {
    const groupedData = new Map();

    users.forEach(user => {
        let identifyingKey;

        if (groupBy === "year") {
            identifyingKey = user.birthday.getFullYear();
        } else if (groupBy === "month") {
            identifyingKey = user.birthday.getMonth() + 1;
        } else {
            identifyingKey = user.birthday.getDate();
        }

        if (!groupedData.has(identifyingKey)) {
            groupedData.set(identifyingKey, []);
        }

        const existingData = groupedData.get(identifyingKey);
        existingData.push(user);
        groupedData.set(identifyingKey, existingData);
    });

    return groupedData;
}

export { groupBirthdays };