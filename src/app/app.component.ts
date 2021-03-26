import { Component, OnInit } from '@angular/core';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void{
    
  }
  title = 'angular-movies'; 

}
