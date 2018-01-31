import { Component  } from '@angular/core';
import { DataService} from './services/data.service';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public dataservice:DataService,public router:Router){}

///////////////////// logout the user ///////////////////////////////
 logout(){
  console.log("function get called");
  this.dataservice.logout();
  this.router.navigate(['/Login']);
  }


  //get label grom html and pass to (getAdminlistAll()) service for post call
    getLabel() {
    this.router.navigate(['/AdminUser/all']);
  }




  }
