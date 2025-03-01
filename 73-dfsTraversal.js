function dfsTraversal(tree) {
    const result = [];
    result.push(tree.value);

    if (tree.left !== undefined) {
        result.push(...dfsTraversal(tree.left));
    }
    if (tree.right !== undefined) {
        result.push(...dfsTraversal(tree.right));
    }

    return result;
}

export { dfsTraversal };