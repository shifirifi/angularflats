import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/models/flat';

@Component({
  selector: 'app-flat-management',
  templateUrl: './flat-management.component.html',
  styleUrls: ['./flat-management.component.css']
})
export class FlatManagementComponent implements OnInit {
  flats=[
    new Flat(1,'סוקולוב',54355,535859,5,4,2,100,456),
    new Flat(2,'הרצל',543235,52229,10,3,3,100,123),

  ]

  constructor() { }

  ngOnInit() {
  }

}
