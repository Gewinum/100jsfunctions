function customBind(newThis, params) {
    return () => {
        this.bind(newThis);
        return this.bind(newThis, ...params)();
    };
}

export { customBind };