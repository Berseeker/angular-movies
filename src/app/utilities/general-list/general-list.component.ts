import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.css']
})
export class GeneralListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  lists;

}