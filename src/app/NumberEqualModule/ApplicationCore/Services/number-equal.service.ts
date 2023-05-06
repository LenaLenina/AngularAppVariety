import { Inject, Injectable } from '@angular/core';
import { INumberEqualService } from '../Services.Abstractions/INumberEqualService';
import { INumberEqualCondition } from "../Services.Abstractions/INumberEqualCondition";
import { NUMBER_EQUAL_CONDITIONS } from 'src/app/InjectionTokens/NUMBER_EQUAL_CONDITIONS';


@Injectable()
export class NumberEqualService implements INumberEqualService{

  constructor(@Inject(NUMBER_EQUAL_CONDITIONS) private _conditions: INumberEqualCondition[]) { }

  public isEqual(number: number): boolean {
    
    for (const condition of this._conditions)
      if (condition.isEqual(number) == false)
        return false;
  
    return true;
  }
}
