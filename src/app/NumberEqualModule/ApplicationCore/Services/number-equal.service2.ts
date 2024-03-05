import { Injectable } from '@angular/core';
import { INumberEqualService2} from '../Services.Abstractions/INumberEqualService2';


@Injectable()
export class NumberEqualService2 extends INumberEqualService2{

  public isEqual(number: number): boolean {
    
    console.log("NumberEqualService2");

    for (const condition of this._conditions)
      if (condition.isEqual(number) == false)
        return false;
  
    return true;
  }
}
