System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegotiationController, WeekDay;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor(_inputDate = $('#date'), _inputQty = $('#qty'), _inputValue = $('#value'), _negotiations = new index_1.Negotiations(), _negotiationsView = new index_2.NegotiationsView("#negotiationsView"), _messageView = new index_2.MessageView("#messageView")) {
                    this._inputDate = _inputDate;
                    this._inputQty = _inputQty;
                    this._inputValue = _inputValue;
                    this._negotiations = _negotiations;
                    this._negotiationsView = _negotiationsView;
                    this._messageView = _messageView;
                    this._negotiationsView.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    let date = new Date(this._inputDate.val().replace(/~/g, ','));
                    if (!this.isBusinessDay(date)) {
                        this._messageView.update("Only business day!");
                    }
                    const negotiation = new index_1.Negotiation(date, parseInt(this._inputQty.val()), parseInt(this._inputValue.val()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update("Negotiations added succesfully!");
                }
                isBusinessDay(date) {
                    return date.getDay() != WeekDay.Sat && date.getDay() != WeekDay.Sun;
                }
            };
            exports_1("NegotiationController", NegotiationController);
            (function (WeekDay) {
                WeekDay[WeekDay["Sun"] = 0] = "Sun";
                WeekDay[WeekDay["Mon"] = 1] = "Mon";
                WeekDay[WeekDay["Tue"] = 2] = "Tue";
                WeekDay[WeekDay["Wed"] = 3] = "Wed";
                WeekDay[WeekDay["Thu"] = 4] = "Thu";
                WeekDay[WeekDay["Fri"] = 5] = "Fri";
                WeekDay[WeekDay["Sat"] = 6] = "Sat";
            })(WeekDay || (WeekDay = {}));
        }
    };
});
