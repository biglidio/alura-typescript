class Negotiation {
    constructor(date, qty, value) {
        this._date = date;
        this._qty = qty;
        this._value = value;
    }
    get date() {
        return this._date;
    }
    get qty() {
        return this._qty;
    }
    get value() {
        return this._value;
    }
}
