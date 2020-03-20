System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegotiationController;
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
                    const negotiation = new index_1.Negotiation(new Date(this._inputDate.val().replace(/~/g, ',')), parseInt(this._inputQty.val()), parseInt(this._inputValue.val()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update("Negotiations added succesfully!");
                }
            };
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
