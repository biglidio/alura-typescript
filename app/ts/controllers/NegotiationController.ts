class NegotiationController {

    constructor(
        private _inputDate: HTMLInputElement = <HTMLInputElement> document.querySelector('#date'),
        private _inputQty: HTMLInputElement = <HTMLInputElement> document.querySelector('#qty'),
        private _inputValue: HTMLInputElement = <HTMLInputElement> document.querySelector('#value')
    ) {}

    add(event: Event) {
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.value.replace(/~/g, ',')),
            parseInt(this._inputQty.value),
            parseInt(this._inputValue.value)
        );

        console.log(negotiation);
    }
}