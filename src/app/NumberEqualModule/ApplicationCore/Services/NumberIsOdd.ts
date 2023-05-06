import { INumberEqualCondition } from "../Services.Abstractions/INumberEqualCondition";


export class NumberIsOdd implements INumberEqualCondition {
    public isEqual(number: number): boolean {
        return number % 2 != 0;
    }
}
