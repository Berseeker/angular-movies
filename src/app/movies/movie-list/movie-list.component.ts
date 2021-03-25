import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  constructor() { }

  @Input()

  movies;

  remove(index){
    this.movies.splice(index,1)
  }

}
