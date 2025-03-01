function createPubSub() {
    return {
        callbacks: new Map(),
        subscribe(eventId, callback) {
            this.lazyLoad(eventId);
            this.callbacks.get(eventId).push(callback);
            return this.unsubscribe.bind(this, eventId, callback);
        },
        unsubscribe(eventId, callback) {
            this.lazyLoad(eventId);
            this.callbacks.set(eventId, this.callbacks.get(eventId).filter(cb => callback !== cb));
        },
        publish(eventId, data) {
            this.lazyLoad(eventId);
            this.callbacks.get(eventId).forEach(cb => cb(data));
        },
        lazyLoad(eventId) {
            if (!this.callbacks.has(eventId)) {
                this.callbacks.set(eventId, []);
            }
        }
    };
}

export { createPubSub };