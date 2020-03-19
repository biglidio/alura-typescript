class NegotiationController {

    constructor(
        private _inputDate: HTMLInputElement = <HTMLInputElement> document.querySelector('#date'),
        private _inputQty: HTMLInputElement = <HTMLInputElement> document.querySelector('#qty'),
        private _inputValue: HTMLInputElement = <HTMLInputElement> document.querySelector('#value'),
        private _negotiations = new Negotiations(),
        private _negotiationsView = new NegotiationsView("#negotiationsView")
    ) {
        this._negotiationsView.update(this._negotiations);

        console.log("View updated succesfully!");
    }

    add(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.value.replace(/~/g, ',')),
            parseInt(this._inputQty.value),
            parseInt(this._inputValue.value)
        );

        this._negotiations.add(negotiation);
        this._negotiations.toArray().forEach(negotiation => {
            console.log(negotiation.date);
            console.log(negotiation.qty);
            console.log(negotiation.value);
        });

        this._negotiationsView.update(this._negotiations);
    }
}