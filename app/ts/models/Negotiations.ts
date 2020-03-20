import { Negotiation } from "./Negotiation";
import { logExecutionTime } from "../helpers/decorators/logExecutionTime";

export class Negotiations {

    private _negotiations: Negotiation[] = [];

    add(negotiation: Negotiation) {
        this._negotiations.push(negotiation);
    }

    @logExecutionTime(true)
    toArray(): Negotiation[] {
        return ([] as Negotiation[]).concat(this._negotiations);
    }
}