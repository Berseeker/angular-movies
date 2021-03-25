import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
  maxRating = 5;

  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number> ();

  @Input()
  selectedRate = 0;

  previousRate= 0;
  maxRatingArr = [];

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0)
  }

  handleMouseEnter(index: number){

    this.selectedRate = index + 1; 
  }

  handleMouseLeave(index: number) {
    if (this.previousRate !== 0) {
      this.selectedRate = this.previousRate;
    } else {
      this.selectedRate = 0;
    } 
  }

  rate(index: number){
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }

}
