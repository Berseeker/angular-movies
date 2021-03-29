import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genderCreationDTO } from '../gender.model';

@Component({
  selector: 'app-form-gender',
  templateUrl: './form-gender.component.html',
  styleUrls: ['./form-gender.component.css']
})
export class FormGenderComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: genderCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<genderCreationDTO> = new EventEmitter<genderCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',{
        validators: [Validators.required,Validators.minLength(3),firstLetterUppercase()]
      }]
    });
    
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');

    if(field.hasError('required')){
      return 'The name field is required';
    }

    if(field.hasError('minlength')){
      return 'The minimun length is 3';
    }

    if(field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }

}
