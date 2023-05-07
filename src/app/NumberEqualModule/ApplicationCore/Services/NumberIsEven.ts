import { INumberIsEven } from "../Services.Abstractions/EqualConditions/INumberIsEven";

export class NumberIsEven implements INumberIsEven {
    public isEqual(number: number): boolean {
        return number % 2 == 0;
    }
}
