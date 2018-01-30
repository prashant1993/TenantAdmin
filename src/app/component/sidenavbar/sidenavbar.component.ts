import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormControl} from '@angular/forms';

import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ////////////////////////////////////////////////////////////////////
  mode = new FormControl('over');

}
