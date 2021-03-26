import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
    this.moviesInTheaters = [
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-14'),
        price: 2500.23,
        poster: 'https://m.media-amazon.com/images/M/MV5BZDlhYmYwZWMtNTkwOS00YjVkLTk0NTItMzM2NTc1NGFiYmU0XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }
    ]

    this.moviesFutureReleases = [
      {
        title: 'Justice League',
        releaseDate: new Date('2020-01-20'),
        price: 400
      },
      {
        title: 'Lego movie',
        releaseDate: new Date('2019-06-24'),
        price: 124.23
      }
    ]
  }

  moviesInTheaters;
  moviesFutureReleases;

  handleRating(rate: number){
    alert(`The user selected ${rate}`);
  }

}
