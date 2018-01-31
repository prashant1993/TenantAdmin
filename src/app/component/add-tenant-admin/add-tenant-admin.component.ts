import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService} from '../../services/data.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-add-tenant-admin',
  templateUrl: './add-tenant-admin.component.html',
  styleUrls: ['./add-tenant-admin.component.css']
})
export class AddTenantAdminComponent implements OnInit {
// public adminUserList;
public obj={};
public roles;
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,public dataservice:DataService) {
    this.toastr.setRootViewContainerRef(vcr);
}

  ngOnInit() {
    console.log("initialize");
    this.dataservice.getData('readConfig?configType=roles')
     .subscribe(
       data =>
       {
         console.log(data.data.ADMIN_ROLES);
         let roles = data.data.ADMIN_ROLES;
         // this.showSuccess();
         // this.router.navigate(['/TenantAdminDashboard']);
       },
          error => {
             // this.showError();
            console.log('error get occurred!')
          }
     );
  }

//////////////////////////////////////////////////////////////////////
  showSuccess() {
    this.toastr.success('Resigster Successfully!');
  }

  showError() {
    console.log()
    this.toastr.error("Failed to register");
  }
///////////////////////////////////////////////////////////////////////
      private fieldArray = [];
      private newAttribute = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  getFormValue(field){
    console.log("field",field)
     this.obj = {"adminUserList":field};
     this.dataservice.postData('tenantAdmin/registerAdminUser', this.obj).subscribe(Response =>
      {
            this.showSuccess();
        console.log('data got',Response);
      },
        error =>{
      this.showError();
     console.log('error get occurred!',error)
      }
     );

  }


    public rows = ['Row 1'];

    public counter = 2;

     addRow() {
      this.rows.push('Row ' + this.counter);
      this.counter++;
    }

    data(value){
      console.log("data",value);
    }

}
