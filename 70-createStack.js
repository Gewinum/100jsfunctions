function createStack() {
    var cl = {};
    const list = [];

    cl.add = (elem) => {
        list.unshift(elem);
    };

    cl.remove = () => {
        return list.shift();
    };

    cl.list = () => {
        return list;
    };
    return cl;
}

export { createStack };