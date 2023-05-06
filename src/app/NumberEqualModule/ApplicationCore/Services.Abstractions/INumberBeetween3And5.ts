import { INumberEqualCondition } from "./INumberEqualCondition";


export abstract class INumberBeetween3And5 implements INumberEqualCondition {
    abstract isEqual(number: number): boolean;
}
