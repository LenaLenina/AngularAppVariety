import { Pipe, PipeTransform } from '@angular/core';
import { IProductsRepository } from '../../core/domain/repositories/i-products-repository';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  constructor(private _repository: IProductsRepository) {}

  transform(value: unknown, ...args: unknown[]): unknown {

    console.log(this._repository.getProducts());

    return null;
  }
}
