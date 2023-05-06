import { INumberEqualCondition } from "./INumberEqualCondition";

export abstract class INumberIsOdd implements INumberEqualCondition {
    abstract isEqual(number: number): boolean;
}
