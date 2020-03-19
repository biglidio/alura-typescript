class NegotiationController {
    constructor(_inputDate = document.querySelector('#date'), _inputQty = document.querySelector('#qty'), _inputValue = document.querySelector('#value'), _negotiations = new Negotiations(), _negotiationsView = new NegotiationsView("#negotiationsView")) {
        this._inputDate = _inputDate;
        this._inputQty = _inputQty;
        this._inputValue = _inputValue;
        this._negotiations = _negotiations;
        this._negotiationsView = _negotiationsView;
        this._negotiationsView.update(this._negotiations);
        console.log("View updated succesfully!");
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/~/g, ',')), parseInt(this._inputQty.value), parseInt(this._inputValue.value));
        this._negotiations.add(negotiation);
        this._negotiations.toArray().forEach(negotiation => {
            console.log(negotiation.date);
            console.log(negotiation.qty);
            console.log(negotiation.value);
        });
        this._negotiationsView.update(this._negotiations);
    }
}
