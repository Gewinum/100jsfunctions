function createLinkedList(initialNumbers) {
    return {
        list: initialNumbers,
        push(el) {
            this.list.push(el)
        },
        unshift(el) {
            this.list.unshift(el)
        },
        getStart() {
            if (this.list.length === 0) {
                return {};
            }
            const start = {
                value: this.list[0],
                next: null,
            }
            let next = start;

            for (let i = 1; i < this.list.length; i++) {
                const newNode = {
                    value: this.list[i],
                    next: null,
                };
                next.next = newNode;
                next = newNode;
            }

            return start;
        }
    };
}

export { createLinkedList };