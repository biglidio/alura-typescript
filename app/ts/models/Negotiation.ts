export class Negotiation {
    constructor(readonly date: Date, readonly qty: number, readonly value: number) {}

    get volume() {
        return this.qty * this.value;
    }
}