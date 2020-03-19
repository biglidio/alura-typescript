class NegotiationController {
    constructor(_inputDate = $('#date'), _inputQty = $('#qty'), _inputValue = $('#value'), _negotiations = new Negotiations(), _negotiationsView = new NegotiationsView("#negotiationsView"), _messageView = new MessageView("#messageView")) {
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
        const negotiation = new Negotiation(new Date(this._inputDate.val().replace(/~/g, ',')), parseInt(this._inputQty.val()), parseInt(this._inputValue.val()));
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
        this._messageView.update("Negotiations added succesfully!");
    }
}
