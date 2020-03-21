System.register(["../models/index", "../views/index", "../helpers/decorators/index", "../services/NegotiationService"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, NegotiationService_1, timer, NegotiationController, WeekDay;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (NegotiationService_1_1) {
                NegotiationService_1 = NegotiationService_1_1;
            }
        ],
        execute: function () {
            timer = 0;
            NegotiationController = class NegotiationController {
                constructor(_negotiations = new index_1.Negotiations(), _negotiationsView = new index_2.NegotiationsView("#negotiationsView"), _messageView = new index_2.MessageView("#messageView"), _service = new NegotiationService_1.NegotiationService) {
                    this._negotiations = _negotiations;
                    this._negotiationsView = _negotiationsView;
                    this._messageView = _messageView;
                    this._service = _service;
                    this._negotiationsView.update(this._negotiations);
                }
                add() {
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
                dataImport() {
                    this._service
                        .getNegotiations(res => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    })
                        .then(negotiations => {
                        negotiations.forEach(negotiation => this._negotiations.add(negotiation));
                        this._negotiationsView.update(this._negotiations);
                    });
                }
            };
            __decorate([
                index_3.domInject("#date")
            ], NegotiationController.prototype, "_inputDate", void 0);
            __decorate([
                index_3.domInject("#qty")
            ], NegotiationController.prototype, "_inputQty", void 0);
            __decorate([
                index_3.domInject("#value")
            ], NegotiationController.prototype, "_inputValue", void 0);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "add", null);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "dataImport", null);
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
