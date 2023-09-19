import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { ViewComponent } from './view/view.component';
import { ILastVisibleIndexService } from './core/services.abstractions/ILastVisibleIndexService';
import { LastVisibleIndexService } from './core/services/last-visible-index.service';



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
  ],
  providers: [
    { provide: ILastVisibleIndexService, useClass: LastVisibleIndexService },
  ]
})
export class TabsModule { }
