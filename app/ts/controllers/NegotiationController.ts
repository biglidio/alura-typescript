class NegotiationController {

    constructor(
        private _inputDate: HTMLInputElement = <HTMLInputElement> document.querySelector('#date'),
        private _inputQty: HTMLInputElement = <HTMLInputElement> document.querySelector('#qty'),
        private _inputValue: HTMLInputElement = <HTMLInputElement> document.querySelector('#value'),
        private _negotiations = new Negotiations(),
        private _negotiationsView = new NegotiationsView("#negotiationsView"),
        private _messageView = new MessageView("#messageView")
    ) {
        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.value.replace(/~/g, ',')),
            parseInt(this._inputQty.value),
            parseInt(this._inputValue.value)
        );

        this._negotiations.add(negotiation);

        this._negotiationsView.update(this._negotiations);
        this._messageView.update("Negotiations added succesfully!");
    }
}