import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genderCreationDTO } from '../gender.model';

@Component({
  selector: 'app-edit-gender',
  templateUrl: './edit-gender.component.html',
  styleUrls: ['./edit-gender.component.css']
})
export class EditGenderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: genderCreationDTO = {name: 'Drama'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{

    });
  }

  saveChanges(genderCreationDTO: genderCreationDTO){

  }

}
