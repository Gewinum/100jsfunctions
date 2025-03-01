function createQueue() {
    var cl = {};
    const list = [];

    cl.add = (elem) => {
        list.push(elem);
    };

    cl.remove = () => {
        return list.shift();
    };

    cl.list = () => {
        return list;
    };
    return cl;
}

export { createQueue };