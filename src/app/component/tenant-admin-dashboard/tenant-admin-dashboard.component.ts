import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-tenant-admin-dashboard',
  templateUrl: './tenant-admin-dashboard.component.html',
  styleUrls: ['./tenant-admin-dashboard.component.css']
})
export class TenantAdminDashboardComponent implements OnInit {
  public dashDataFirst;
  constructor(public dataservice: DataService, public http: Http, public router: Router) { }

  ngOnInit() {
    console.log("initialization");
    ////////////////////////////////read the tetant data by calling service method//////////////////////////////////////////////
    this.dataservice.getData('tenantAdmin/readDashboard').subscribe(response => {
      if (response.status) {
        this.dashDataFirst = response.data;
        console.log(this.dashDataFirst);
      }
    },
      error => console.log("Error while retrieving"))
  }

////////////////////////////////read the perticular category user detail//////////////////////////////////////////
  getAdminlistAll(label) {
    return this.dataservice.getData('tenantAdmin/readAdminList/' + label).subscribe(Response =>
    {
      console.log('data got', Response.data);
      // localStorage.setItem("hr admin", Response.data);
      return Response.data;
    },
      error => console.log('error get occurred!', error)
    );
  }

  //get label grom html and pass to (getAdminlistAll()) service for post call
    getLabel(label) {
    console.log("label", label);
    this.getAdminlistAll(label);
    this.router.navigate(['/AdminUser', label]);
  }
}
