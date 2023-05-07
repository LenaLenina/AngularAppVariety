import { INumberBeetween3And5 } from "../Services.Abstractions/EqualConditions/INumberBeetween3And5";


export class NumberBeetween3And5 implements INumberBeetween3And5 {
    public isEqual(number: number): boolean {
        return number >= 3 && number <= 5;
    }
}
