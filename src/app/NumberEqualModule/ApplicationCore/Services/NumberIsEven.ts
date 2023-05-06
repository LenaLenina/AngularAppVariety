import { INumberEqualCondition } from "../Services.Abstractions/INumberEqualCondition";


export class NumberIsEven implements INumberEqualCondition {
    public isEqual(number: number): boolean {
        return number % 2 == 0;
    }
}
