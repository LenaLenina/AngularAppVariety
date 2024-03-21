import { Injectable } from '@angular/core';
import { ICounter } from '../Services.Abstractions/ICounter';
import { INumberEqualService } from '../../../NumberEqualModule/ApplicationCore/Services.Abstractions/INumberEqualService';
import { INumberEqualService2 } from '../../../NumberEqualModule/ApplicationCore/Services.Abstractions/INumberEqualService2';

@Injectable()
export class NumberCounterService extends ICounter {
  
  public count(numbers: number[]): number {
    var count = 0;

    for (const number of numbers)
      if (this._equalService.isEqual(number))
      {
        count += 1;
        console.log(number);
      }

    return count;
  }
}
