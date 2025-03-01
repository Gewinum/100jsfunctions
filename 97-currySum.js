function currySum(addition) {
    if (addition === undefined) {
        if (this !== undefined) {
            return this.initialValue === undefined ? 0 : this.initialValue;
        } else {
            return 0;
        }
    }

    const func = currySum;
    let initialValue;
    if (this !== undefined) {
        initialValue = this.initialValue === undefined ? 0 : this.initialValue;
    } else {
        initialValue = 0;
    }
    initialValue += addition;
    return func.bind({
        initialValue: initialValue
    });
}

export { currySum };