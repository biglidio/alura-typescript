import { Negotiations, Negotiation } from "../models/index";
import { NegotiationsView, MessageView } from "../views/index";

export class NegotiationController {

    constructor(
        private _inputDate: JQuery = $('#date'),
        private _inputQty: JQuery = $('#qty'),
        private _inputValue: JQuery = $('#value'),
        private _negotiations = new Negotiations(),
        private _negotiationsView = new NegotiationsView("#negotiationsView"),
        private _messageView = new MessageView("#messageView")
    ) {
        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.val().replace(/~/g, ',')),
            parseInt(this._inputQty.val()),
            parseInt(this._inputValue.val())
        );

        this._negotiations.add(negotiation);

        this._negotiationsView.update(this._negotiations);
        this._messageView.update("Negotiations added succesfully!");
    }
}