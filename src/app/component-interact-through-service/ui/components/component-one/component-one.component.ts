import { Component } from '@angular/core';
import { ISharedService } from 'src/app/component-interact-through-service/application-core/services.abstractions/ishared.service';


@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent {

  currentVisible = false;

  constructor(private sharedService: ISharedService) { }

  toggleVisibility() {
    this.currentVisible = !this.currentVisible;
    this.sharedService.isVisibleSource.next(this.currentVisible);
  }
  
}
