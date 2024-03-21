import { Component } from '@angular/core';
import { IDistinctArrayService } from 'src/app/ArrayExtensions/Services.Abstractions/IDistinctService';
import { ICounter } from 'src/app/CounterModule/ApplicationCore/Services.Abstractions/ICounter';
import { INumberRepository } from 'src/app/NumberModule/ApplicationCore/Domain/Repositories/INumberRepository';


@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  constructor(private _repository: INumberRepository, 
    private _counter: ICounter,
    private _distinctArrayService: IDistinctArrayService
  ) { }

  ngOnInit() {

    var arr = this._repository.getArrayOfNumbers();
    console.log(this._counter.count(arr));
    // const uniqueArr = this._distinctArrayService.distinct(arr); 

    // console.log(this._counter.count(uniqueArr));
  }
}
