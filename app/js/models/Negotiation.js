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
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
