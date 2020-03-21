System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negotiation;
    return {
        setters: [],
        execute: function () {
            Negotiation = class Negotiation {
                constructor(date, qty, value) {
                    this.date = date;
                    this.qty = qty;
                    this.value = value;
                }
                get volume() {
                    return this.qty * this.value;
                }
                toText() {
                    console.log(`Date: ${this.date},
            Quantity: ${this.qty},
            Value: ${this.value},
            Volume: ${this.volume}`);
                }
                isEquals(negotiation) {
                    return this.date.getDate() == negotiation.date.getDate()
                        && this.date.getMonth() == negotiation.date.getMonth()
                        && this.date.getFullYear() == negotiation.date.getFullYear();
                }
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
