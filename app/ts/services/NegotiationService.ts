import { Negotiation, PartialNegotiation } from '../models/index';
export class NegotiationService {

    getNegotiations(handler: HandlerFunction): Promise<Negotiation[]> {

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((data: PartialNegotiation[]) => 
                data
                    .map(item => new Negotiation(new Date(), item.vezes, item.montante))     
            )
            .catch(err => {
                console.log(err);
                throw new Error("Impossible to import negotiations");
            });
    }
}

export interface HandlerFunction {

    (res: Response): Response
}