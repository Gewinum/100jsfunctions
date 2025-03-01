function createObservable() {
    return {
        callbacks: [],
        subscribe(callback) {
            this.callbacks.push(callback);
        },
        unsubscribe(callback) {
            this.callbacks = this.callbacks.filter(cb => callback !== cb);
        },
        notify(data) {
            this.callbacks.forEach(cb => cb(data));
        }
    };
}

export { createObservable };