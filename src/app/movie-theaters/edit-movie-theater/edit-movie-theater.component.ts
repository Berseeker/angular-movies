import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersnDTO } from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model:movieTheatersnDTO = {
    name: 'Cinepolis',
    latitude: 21.157333361908723,
    longitude: -86.81949019432068
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
    });

  }

  saveChanges(movieTheater: movieTheatersCreationDTO){
    console.log(movieTheater);
  }

  

}
