function compareSets(setA, setB) {
    return {
        onlyA: setA.difference(setB),
        onlyB: setB.difference(setA),
        union: setA.union(setB)
    };
}

export { compareSets };