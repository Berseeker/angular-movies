import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  genders = [{id: 1, name: 'Drama'},{id: 2, name: 'Action'}];
  movies = [
    {title: 'Spider-Man', poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {title: 'Moana', poster: 'https://m.media-amazon.com/images/M/MV5BZDlhYmYwZWMtNTkwOS00YjVkLTk0NTItMzM2NTc1NGFiYmU0XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {title: 'Wall-e', poster: 'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg'}
  ];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genderId: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.form.valueChanges
      .subscribe(values =>{
        this.movies = this.originalMovies;
        this.filterMovies(values);
      })
  }

  filterMovies(value: any){
    if(value.title){
      this.movies = this.movies.filter(movie =>movie.title.indexOf(value.title) !== -1)
    }
  }

  clearForm(){
    this.form.reset();
  }

}
