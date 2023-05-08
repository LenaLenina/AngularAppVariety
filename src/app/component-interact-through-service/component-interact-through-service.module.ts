import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './ui/components/component-one/component-one.component';
import { ComponentTwoComponent } from './ui/components/component-two/component-two.component';
import { ISharedService } from './application-core/services.abstractions/ishared.service';
import { SharedService } from './application-core/services/shared.service ';



@NgModule({
  declarations: [
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ ComponentOneComponent, ComponentTwoComponent ],
  providers: [{ provide: ISharedService, useClass: SharedService }]
})
export class ComponentInteractThroughServiceModule { }
