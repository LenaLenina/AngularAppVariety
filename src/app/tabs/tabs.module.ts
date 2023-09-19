import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    TabsComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewComponent
  ]
})
export class TabsModule { }
