import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, Marker, LeafletMouseEvent, marker } from 'leaflet';
import { coordinatesMap } from './coordinate';
import "leaflet/dist/images/marker-shadow.png";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude,value.longitude]));
  }

  @Input()
  initialCoordinates: coordinatesMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();



  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 18, 
        attribution: 'Angular Movies' 
      })
    ],
    zoom: 17,
    center: latLng(21.155695242686875, -86.82133018970491)
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({latitude,longitude});
    this.layers = [];
    this.layers.push(marker([latitude,longitude]));
    this.onSelectedLocation.emit({latitude,longitude});
  }

}
