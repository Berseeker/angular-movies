import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent implements OnInit, OnChanges,OnDestroy,DoCheck,AfterViewInit {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }
  ngDoCheck(): void {
    console.log('on DoCheck');
  }
  ngAfterViewInit(): void {
    console.log('on ViewInit');
  }

  ngOnInit(): void {
    console.log('on Init');
  }

}
