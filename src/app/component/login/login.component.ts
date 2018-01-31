import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService} from '../../services/data.service';
import { Http ,Response} from '@angular/http';
import { Router } from '@angular/router';
 import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,public dataservice:DataService,public router:Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }


    ngOnInit() {
    }

        showSuccess() {
          this.toastr.success('Login Successfully!');
        }

        showError(message) {
          console.log()
          this.toastr.error(message);
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
           this.showSuccess();
           setTimeout (() => {
             this.router.navigate(['/TenantAdminDashboard']);
           }, 2000)
         },
            error => {

              console.log('error get occurred!',error._body,error)
              // var json = JSON.stringify(eval("(" + error._body + ")"));
              // console.log(json);
              this.showError(error._body);
            }
       );
}





}
