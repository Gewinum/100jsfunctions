function createCounter(initialValue) {
    return {
        val: initialValue,
        increment() {
            this.val++;
        },
        decrement() {
            this.val--;
        },
        getValue() {
            return this.val;
        }
    };
}

export { createCounter };