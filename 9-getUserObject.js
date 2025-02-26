function getUserObject(firstName, lastName, age) {
    return {
        "name": firstName + " " + lastName,
        "age": age
    };
}

export { getUserObject };