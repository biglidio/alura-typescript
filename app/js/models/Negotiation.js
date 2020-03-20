System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negotiation;
    return {
        setters: [],
        execute: function () {
            Negotiation = class Negotiation {
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
                get volume() {
                    return this._qty * this._value;
                }
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
