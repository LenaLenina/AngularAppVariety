import { INumberEqualCondition } from "../Services.Abstractions/INumberEqualCondition";


export class NumberBeetween3And5 implements INumberEqualCondition {
    public isEqual(number: number): boolean {
        return number >= 3 && number <= 5;
    }
}
