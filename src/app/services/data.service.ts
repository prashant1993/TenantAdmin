import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { NgModule } from '@angular/core';

@Injectable()
export class DataService {

  public token: String;
  constructor(public http: Http) { }

  // url="https://dev.fundoohr.bridgelabz.com/api/"
  url = "http://192.168.0.126:1337/api/"

//////////////////////////////////////////////////////////////////////////
  getLoginData(path, data) {
    //path and login data from login.ts
    console.log(path, data);
    data.tenantName = "bridgelabz";
    console.log(data);
    console.log(this.url);
    //concat the url and path
    let postUrl = this.url.concat(path);
    console.log(postUrl);
    //post request to the url with posrtUrl(ulr + path) and data(login data)
    return this.http.post(postUrl, data)
      .map((response: Response) => {

        let resData = response.json();
        console.log("response data", resData);

        //get token from the response
        let token = resData.token;

        //set token to the local storage
        console.log("token", token);
        localStorage.setItem("token", token);
      })
  }

////////////////////////////////////////////////////////////
  logout() {
    localStorage.removeItem("token");
  }

  ////////////////////////////////////////////////////////
  getData(path) {
    //get url from the ts and concate it.
    console.log("path", path);
    let getUrl = this.url.concat(path);

    //get token from the local storage
    let token = localStorage.getItem("token");
    console.log("token", token);

    //set the token to header
    const headers = new Headers();
    headers.append('x-access-token', token);

    //http get call to the server
    return this.http.get(getUrl, { headers: headers })
      .map((response: Response) => {
        let resData = response.json();
        return resData;
      }
      )
  }


///////////////////////////////////////////////////////////////////////
  postData(path, value) {
    //get url from the ts and concate it.
    console.log("path", path);
    console.log("value", value);
    let postUrl = this.url.concat(path);
    console.log("postUrl", postUrl);
    //get token from the local storage
    let token = localStorage.getItem("token");
    console.log("token", token);

    //set the token to header
    const headers = new Headers();
    headers.append('x-access-token', token);

    //http get call to the server
    return this.http.post(postUrl, value, { headers: headers })
      .map((response: Response) => {
        console.log("response data", response);
      })
  }


}
