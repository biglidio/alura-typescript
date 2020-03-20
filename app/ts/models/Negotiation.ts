export class Negotiation {
    constructor(private _date: Date, private _qty: number, private _value: number) {}

    get date() {
        return this._date;
    }

    get qty() {
        return this._qty;
    }

    get value() {
        return this._value;
    }

    get volume() {
        return this._qty * this._value;
    }
}