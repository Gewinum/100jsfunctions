function halfAndHalf(text) {
    const halfedLength = Math.floor(text.length / 2);

    return text.substring(0, halfedLength).toLowerCase() + text.substring(halfedLength).toUpperCase();
}

export { halfAndHalf };