function groupBy(callback) {
    const map = new Map();

    this.forEach(el => {
        const group = callback(el);
        if (!map.has(group)) {
            map.set(group, []);
        }
        const existing = map.get(group);
        existing.push(el);
        map.set(group, existing);
    });

    return map;
}

Array.prototype.groupBy = groupBy;

const numbers = [1, 2, 3, 4, 5];

const groupingMap = numbers.groupBy((number) =>
    number % 2 === 0 ? "even" : "odd"
);

console.log(groupingMap); // Map: 'odd' => [ 1, 3, 5 ], 'even' => [ 2, 4 ]

export { groupBy };