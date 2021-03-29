import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genderCreationDTO } from '../gender.model';

@Component({
  selector: 'app-create-gender',
  templateUrl: './create-gender.component.html',
  styleUrls: ['./create-gender.component.css']
})
export class CreateGenderComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit(): void {  
  }

  saveChanges(genderCreationDTO: genderCreationDTO){
    //save the gender
    console.log(genderCreationDTO);
    this.router.navigate(['genders'])
  }

}
