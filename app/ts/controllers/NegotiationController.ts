import { Negotiations, Negotiation } from "../models/index";
import { NegotiationsView, MessageView } from "../views/index";
import { domInject } from "../helpers/decorators/domInject";

export class NegotiationController {

    @domInject("#date")
    private _inputDate: JQuery;
    
    @domInject("#qty")
    private _inputQty: JQuery;

    @domInject("#value")
    private _inputValue: JQuery;

    constructor(
        private _negotiations = new Negotiations(),
        private _negotiationsView = new NegotiationsView("#negotiationsView"),
        private _messageView = new MessageView("#messageView")
    ) {
        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event) {
        event.preventDefault();

        let date = new Date(this._inputDate.val().replace(/~/g, ','));

        if(!this.isBusinessDay(date)) {
            this._messageView.update("Only business day!");
        }

        const negotiation = new Negotiation(
            date,
            parseInt(this._inputQty.val()),
            parseInt(this._inputValue.val())
        );

        this._negotiations.add(negotiation);

        this._negotiationsView.update(this._negotiations);
        this._messageView.update("Negotiations added succesfully!");
    }

    private isBusinessDay(date: Date) {
        return date.getDay() != WeekDay.Sat && date.getDay() != WeekDay.Sun; 
    }
}

enum WeekDay {
    Sun, Mon, Tue, Wed, Thu, Fri, Sat
}