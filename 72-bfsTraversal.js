function bfsTraversal(tree) {
    const queue = [];
    queue.push(tree);
    const result = [];

    while (queue.length !== 0) {
        const node = queue.shift();
        result.push(node.value);
        if (node.left !== undefined) {
            queue.push(node.left);
        }
        if (node.right !== undefined) {
            queue.push(node.right);
        }
    }

    return result;
}

export { bfsTraversal };