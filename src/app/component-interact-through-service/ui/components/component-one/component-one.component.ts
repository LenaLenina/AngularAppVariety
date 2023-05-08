import { Component } from '@angular/core';
import { ISharedService } from 'src/app/component-interact-through-service/application-core/services.abstractions/ishared.service';


@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent {

  constructor(private sharedService: ISharedService) { }

  get currentVisible(): boolean {
    return this.sharedService.GetVisible();
  }

  toggleVisibility() {
    this.sharedService.ChangeVisible();
  }
  
}
