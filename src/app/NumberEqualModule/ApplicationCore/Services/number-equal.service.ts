import { Injectable } from '@angular/core';
import { INumberEqualService } from '../Services.Abstractions/INumberEqualService';
import { INumberBeetween3And5 } from "../Services.Abstractions/INumberBeetween3And5";

import { INumberEqualCondition } from "../Services.Abstractions/INumberEqualCondition";
import { INumberIsOdd } from '../Services.Abstractions/INumberIsOdd';

@Injectable()
export class NumberEqualService implements INumberEqualService{

  private _conditions: INumberEqualCondition[];

  constructor(private e1: INumberBeetween3And5, private e2: INumberIsOdd) { 
    this._conditions = [e1, e2];
  }

  public isEqual(number: number): boolean {
    
    for (const condition of this._conditions)
      if (condition.isEqual(number) == false)
        return false;
  
    return true;
  }
}
