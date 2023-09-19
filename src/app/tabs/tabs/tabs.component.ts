import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  HostListener,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';

import { LastVisibleIndexService } from '../services/last-visible-index.service';

const MORE_BUTTON_WIDTH = 65;

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterViewChecked {
  @Input()
  tabs: readonly string[] = [];

  @Output()
  readonly selectedTab = new EventEmitter<string>();

  @ViewChildren('tab')
  readonly tabElements: QueryList<ElementRef<HTMLElement>> = new QueryList();

  lastVisibleIndex = Infinity;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly cdr: ChangeDetectorRef,
    private readonly _lastVisibleIndexService: LastVisibleIndexService
  ) {}

  ngAfterViewChecked() {
    this._lastVisibleIndexService.tabElements = this.tabElements;
    this._lastVisibleIndexService.elementRef = this.elementRef;
    this._lastVisibleIndexService.moreButtonWidth = MORE_BUTTON_WIDTH;

    const index = this._lastVisibleIndexService.getLastVisibleIndex();

    if (index === this.lastVisibleIndex) {
      return;
    }

    this.lastVisibleIndex = index;
    this.cdr.detectChanges();
  }

  @HostListener('window:resize')
  onResize() {
    this.lastVisibleIndex = this._lastVisibleIndexService.getLastVisibleIndex();
  }

  public isIndexMoreThanLastVisibleIndex(index: number): boolean {
    console.log("isIndexMoreThanLastIndex");
    return index > this.lastVisibleIndex;
  }
}
