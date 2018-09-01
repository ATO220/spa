import { Component, OnInit } from '@angular/core';
import { compileComponentFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}