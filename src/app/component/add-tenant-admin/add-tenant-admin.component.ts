import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService} from '../../services/data.service';
@Component({
  selector: 'app-add-tenant-admin',
  templateUrl: './add-tenant-admin.component.html',
  styleUrls: ['./add-tenant-admin.component.css']
})
export class AddTenantAdminComponent implements OnInit {
public adminUserList;
public obj={};
  constructor(public dataservice:DataService) { }

  ngOnInit() {
    console.log("initialize");
  }

      private fieldArray = [];
      private newAttribute = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  getFormValue(field){
  //   login(value){
    console.log("function calling");
    console.log(field);
     // this.adminUserList.push(field);
     this.obj = {"adminUserList":field};
    // this.adminUserList = field;
    // this.adminUserList = field;
     // console.log(this.adminUserList);
    this.dataservice.postData('tenantAdmin/registerAdminUser', this.obj).subscribe(Response =>
      {
        console.log('data got',Response);
      },
       error => console.log('error get occurred!',error)
     );

  }

}
