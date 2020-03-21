import { Negotiation } from "./Negotiation";
import { logExecutionTime } from "../helpers/decorators/logExecutionTime";
import { MyObject } from "./MyObject";

export class Negotiations implements MyObject<Negotiations> {

    private _negotiations: Negotiation[] = [];

    add(negotiation: Negotiation) {
        this._negotiations.push(negotiation);
    }

    @logExecutionTime(true)
    toArray(): Negotiation[] {
        return ([] as Negotiation[]).concat(this._negotiations);
    }

    toText(): void{
        console.log("Print negotiations");
        console.log(JSON.stringify(this._negotiations));
    }

    isEquals(negotiations: Negotiations): boolean {

        return JSON.stringify(this._negotiations) == JSON.stringify(negotiations.toArray());
    }
}