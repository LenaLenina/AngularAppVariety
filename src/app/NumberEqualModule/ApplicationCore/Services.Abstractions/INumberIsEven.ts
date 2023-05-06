import { INumberEqualCondition } from "./INumberEqualCondition";

export abstract class INumberIsEven implements INumberEqualCondition {
    abstract isEqual(number: number): boolean;
}
