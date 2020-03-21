import { MyObject } from "./MyObject";

export class Negotiation implements MyObject<Negotiation> {
    constructor(readonly date: Date, readonly qty: number, readonly value: number) {}

    get volume() {
        return this.qty * this.value;
    }

    toText(): void {

        console.log(
            `Date: ${this.date},
            Quantity: ${this.qty},
            Value: ${this.value},
            Volume: ${this.volume}`
        );
    }

    isEquals(negotiation: Negotiation): boolean {
        return this.date.getDate() == negotiation.date.getDate()
            && this.date.getMonth() == negotiation.date.getMonth()
            && this.date.getFullYear() == negotiation.date.getFullYear();
    }
}