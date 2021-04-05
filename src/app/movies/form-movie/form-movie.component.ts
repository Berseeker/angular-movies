import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheatersCreationDTO } from 'src/app/movie-theaters/movie-theater.model';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieDTO, movieCreationDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: movieDTO

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  nonSelectedGenders: multipleSelectorModel[] = [
    {key: 1, value: 'Drama'},
    {key: 2, value: 'Action'},
    {key: 3, value: 'Horror'},
    {key: 4, value: 'Sci-fi'},
  ];

  selectedGenders: multipleSelectorModel[] = [];

  nonSelectedMovieTheaters: multipleSelectorModel[] = [
    {key:1,value:'Plaza Aragon'},
    {key:2,value:'Plaza Lindavista'},
    {key:3,value:'Reforma'},
    {key:4,value:'Polanco'}
  ];

  selectedMovieTheaters: multipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['',{
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      gendersIds:'',
      movieTheatersIds: ''
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file: File){
    this.form.get('poster').setValue(file);
  }

  changeMarkDown(content: String){
    this.form.get('summary').setValue(content);
  }

  saveChanges(){
    const gendersIds = this.selectedGenders.map(value => value.key);
    const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    this.form.get('gendersIds').setValue(gendersIds);
    this.form.get('movieTheatersIds').setValue(movieTheatersIds);
    this.onSaveChanges.emit(this.form.value)
  }

}
