import { Component } from '@angular/core';
import { ISharedService } from 'src/app/component-interact-through-service/application-core/services.abstractions/ishared.service';


@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss'],
})
export class ComponentTwoComponent {

  constructor(private sharedService: ISharedService) { }

  get currentVisible(): boolean {
    return this.sharedService.GetVisible();
  }

  onClick():void {
    this.sharedService.ChangeVisible();
  }
}
