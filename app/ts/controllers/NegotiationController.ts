import { Negotiations, Negotiation, PartialNegotiation } from "../models/index";
import { NegotiationsView, MessageView } from "../views/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { NegotiationService } from "../services/NegotiationService";
import { print } from "../helpers/Utils";

let timer = 0;

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
        private _messageView = new MessageView("#messageView"),
        private _service = new NegotiationService
    ) {
        this._negotiationsView.update(this._negotiations);
    }

    @throttle()
    add() {
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
        print(negotiation, this._negotiations);

        this._negotiationsView.update(this._negotiations);
        this._messageView.update("Negotiations added succesfully!");
    }

    private isBusinessDay(date: Date) {
        return date.getDay() != WeekDay.Sat && date.getDay() != WeekDay.Sun; 
    }

    @throttle()
    async dataImport() {

        try {
            const negotiationsToImport = await this._service
                .getNegotiations(res => {
                    if(res.ok) {
                        return res;
                    } else {
                        throw new Error(res.statusText);
                    }
                })
            const negotiationsImported = this._negotiations.toArray();
    
            negotiationsToImport
                .filter(negotiation => 
                    !negotiationsImported.some(imported => 
                        negotiation.isEquals(imported)))
                .forEach(negotiation => 
                    this._negotiations.add(negotiation));
    
            this._negotiationsView.update(this._negotiations);
        
            err => this._messageView.update(err)
        } catch(err) {
            this._messageView.update(err);
        }
    }
}

enum WeekDay {
    Sun, Mon, Tue, Wed, Thu, Fri, Sat
}