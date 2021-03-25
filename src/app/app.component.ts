import { Component, OnInit } from '@angular/core';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void{
    this.moviesInTheaters = [
      {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-14'),
        price: 2500.23
      }, {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-14'),
        price: 2500.23
      }, {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-14'),
        price: 2500.23
      }, {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-14'),
        price: 2500.23
      }, {
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-14'),
        price: 2500.23
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
  title = 'angular-movies'; 
  moviesInTheaters;
  moviesFutureReleases;

  handleRating(rate: number){
    alert(`The user selected ${rate}`);
  }
}
