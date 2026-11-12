import { EventEmitter } from './EventEmitter';

/*
1) В методе subscribe подпишитесь на событие click с помощью EventEmitter.on(eventName, callback).
В обработчике нужно увеличивать значение поля count на 1
2)В методе unsubscribe отпишитесь от события click с помощью EventEmitter.off(eventName, callback).
В качестве callback нужно передавать тот же самый обработчик, который был передан при подписке.
 */
export const obj = {
    count: 0,
    handleClick() {
        return this.count++;
    },
    subscribe() {
        this._boundHandler = this.handleClick.bind(this);
        EventEmitter.on('click', this._boundHandler);
    },
    unsubscribe() {
        EventEmitter.off('click', this._boundHandler);
    },
};

/*
Сделайте так, чтобы метод first вызывал метод second со своими аргументами, но в обратном порядке:

obj1.first(1, 2, 3);
// Внутренний вызов должен быть равносилен obj1.second(3, 2, 1)
 */
export const obj1 = {
    first(...args) {
        let args2 = args.toReversed();
        this.second(...args2);
    },
    second() {
        // здесь ничего писать не нужно
    },
};
