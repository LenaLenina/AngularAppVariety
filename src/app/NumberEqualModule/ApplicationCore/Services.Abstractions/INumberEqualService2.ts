import { Inject, Injectable } from "@angular/core";
import { NUMBER_EQUAL_CONDITIONS } from "src/app/InjectionTokens/NUMBER_EQUAL_CONDITIONS";
import { INumberEqualCondition } from "./INumberEqualCondition";

// Если не поставить данный @Injectable() то будут ошибки компиляции
// т.к. нужно произвести @Inject в конструкторе
@Injectable()
export abstract class INumberEqualService2 {
    // если надо использовать вне конструктора, то нужно прописать в tsconfig.json
    // "strictPropertyInitialization": false, in compilerOptions
    @Inject(NUMBER_EQUAL_CONDITIONS) protected _conditions: INumberEqualCondition[];

    // constructor(@Inject(NUMBER_EQUAL_CONDITIONS) protected _conditions: INumberEqualCondition[]) { }

    abstract isEqual(number: number): boolean;
}
