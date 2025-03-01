class TodoList {
    #map

    constructor() {
        this.#map = new Map();
    }

    add(id, task) {
        if (this.getItem(id) !== null) {
            throw new Error("There is already a todo item with this id.");
        }
        this.#map.set(id, {
            "id": id,
            "task": task,
            "done": false
        });
    }

    remove(id) {
        this.#map.delete(id);
    }

    markAsDone(id) {
        if (this.getItem(id) === null) {
            throw new Error("There is no todo item with this id.");
        }
        this.#map.get(id).done = true;
    }

    getItem(id) {
        return this.#map.has(id) ? this.#map.get(id) : null;
    }

    getAll() {
        return Array.from(this.#map.values()).sort((a, b) => a.id.localeCompare(b.id));
    }
}

export { TodoList };