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

  constructor(
    public readonly _lastVisibleIndexService: LastVisibleIndexService,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly cdr: ChangeDetectorRef,
  ) {
    this._lastVisibleIndexService.elementRef = this.elementRef;
    this._lastVisibleIndexService.cdr = this.cdr;
  }

  ngAfterViewInit() {
    this._lastVisibleIndexService.tabElements = this.tabElements;
  }

  ngAfterViewChecked() {
    this._lastVisibleIndexService.onNgAfterViewChecked();
  }

  @HostListener('window:resize')
  onResize() {
    this._lastVisibleIndexService.onWindowResize();
  }
}
