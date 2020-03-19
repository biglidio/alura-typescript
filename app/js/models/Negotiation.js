class Negotiation {
    constructor(_date, _qty, _value) {
        this._date = _date;
        this._qty = _qty;
        this._value = _value;
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
