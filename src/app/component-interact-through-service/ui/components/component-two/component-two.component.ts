import { Component } from '@angular/core';
import { ISharedService } from 'src/app/component-interact-through-service/application-core/services.abstractions/ishared.service';


@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss'],
})
export class ComponentTwoComponent {

  isVisible$ = this.sharedService.isVisibleSource.asObservable();
  
  constructor(private sharedService: ISharedService) { }

}
