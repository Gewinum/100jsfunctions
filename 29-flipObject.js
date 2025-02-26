const people = {
    bob: "JS Developer",
    alice: "AI Engineer",
    jon: "JS Developer",
    nick: "UX Designer",
};

function flipObject(people) {
    const keys = Object.keys(people);
    let newObj = {};
    keys.forEach(key => {
        if (Object.keys(newObj).includes(people[key])) {
            newObj[people[key]].push(key);
        } else {
            newObj[people[key]] = [key];
        }
    });
    return newObj;
}

export { flipObject };