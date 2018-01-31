import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
///////////////////////////////////////////////////////
// import {MatTableModule} from '@angular/material/table';
// import { NgModule } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import { DataSource } from '@angular/cdk/collections';
// import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
//////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// export interface Data { }
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})

export class AdminUserComponent implements OnInit {
  public label: String;
  ////////////////////////////////////////
  public myData=[];
  public obj={};
  // displayedColumns = ['emailAddress', 'role', 'Action'];
  // // dataSource = new UserDataSource(this.dataservice);
  // dataSource: MyDataSource;
  //////////////////////////////////////////


  constructor(public dataservice: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("initialize function");
    this.route.params.subscribe(params => {
      this.label = params['label'];
      console.log(this.label);
      this.getAdminlistAll(this.label);
    });
  }

  getAdminlistAll(label) {
    console.log("function calling");
    console.log("label", label);
    this.dataservice.getData('tenantAdmin/readAdminList/' + label).subscribe(Response =>
      {
      console.log('data got', Response.data);
      this.myData = Response.data;
      // this.dataSource = new MyDataSource(this.myData);
    },
      error => console.log('error get occurred!', error)
    );
  }


////////////////////////////////to change the status of user Active or Inactive/////////////////////////////////////////////
  postStatus(emailAddress,status) {
    console.log("emailAddress",emailAddress,status);
    if(status =="ACTIVE"){
      status=true;
    }else
    {
        status=false;
    }
    this.obj={"emailAddress" : emailAddress,"isActive" : status}
    console.log(this.obj);
    this.dataservice.postData('tenantAdmin/activateDeactiveUser',this.obj).subscribe(Response =>
      {
      console.log('data got', Response);
    },
      error => console.log('error get occurred!', error)
    );
  }

}

////////////////////////////////////////////////////////////////////////////
// export class MyDataSource extends DataSource<> {
//   constructor(private data: Data[]) {
//     super();
//   }
//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<Data[]> {
//     return Observable.of(this.data);
//   }
//
//   disconnect() { }
//
// }
