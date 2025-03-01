function getDoubleN(n) {
    return () => {
        n *= 2;
        return n;
    }
}

export { getDoubleN };