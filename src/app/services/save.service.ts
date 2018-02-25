import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SearchForm} from '../model/searchModel';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SaveService {

  userEmails: string[]=[];

  constructor(private http: HttpClient) { }

  addNewRecord(theForm:SearchForm): Promise<any>{
    return (this.http.get(`/G1phySearchEng1ne/search/${theForm.userEmail}&${theForm.searchTerm}`)
      .take(1).toPromise());
  }

  getSearchRecord(theEmail:string): Promise<any>{   
    return (this.http.get(`/G1phySearchEng1ne/display/${theEmail}`)
      .take(1).toPromise());
  }
  
  addUserEmail(userEmail: string) {
    this.userEmails.push(userEmail);
  }

  getUserEmail() : string {
    return this.userEmails[0];
  }
}
