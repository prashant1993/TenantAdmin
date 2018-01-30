import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService} from '../../services/data.service';
import { Http ,Response} from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dataservice:DataService,public router:Router) { }

  ngOnInit() {
  }

//get form data into ts
  login(value){
    console.log(value);
  //    // this.dataservice.getLoginData(value);
  //    this.dataservice.getLoginData('login', value)
  //    .subscribe(resEmployeeData =>  resEmployeeError => console.log("Error while retrieving"))
  //
  // }
      //
      this.dataservice.getLoginData('login',value)
       .subscribe(
         data =>
         {
           // console.log(data);
           this.router.navigate(['/TenantAdminDashboard'])
         },
            error => console.log('error get occurred!')
       );
}
}
