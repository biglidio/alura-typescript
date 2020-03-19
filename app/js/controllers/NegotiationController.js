class NegotiationController {
    constructor(_inputDate = document.querySelector('#date'), _inputQty = document.querySelector('#qty'), _inputValue = document.querySelector('#value')) {
        this._inputDate = _inputDate;
        this._inputQty = _inputQty;
        this._inputValue = _inputValue;
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/~/g, ',')), parseInt(this._inputQty.value), parseInt(this._inputValue.value));
        console.log(negotiation);
    }
}
