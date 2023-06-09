import { INumberIsOdd } from "../Services.Abstractions/EqualConditions/INumberIsOdd";


export class NumberIsOdd implements INumberIsOdd {
    public isEqual(number: number): boolean {
        return number % 2 != 0;
    }
}
