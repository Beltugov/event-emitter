class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(eventName, listener) {
        if (typeof this.events[eventName] !== 'object') {
            this.events[eventName] = [];
        }

        this.events[eventName].push(listener);
    }

    emit(eventName, ...args) {
        if (typeof this.events[eventName] === 'object') {
            let listeners = this.events[eventName];
            listeners.forEach(callback => args.forEach((arg) => callback.call(null, arg)));
        }
    }

    off(eventName, listener) {
        this.events[eventName] = this.events[eventName].filter((evenListeners) => evenListeners !== listener);
    }
}