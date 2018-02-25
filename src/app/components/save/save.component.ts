import { Component, OnInit } from '@angular/core';
import {SaveService} from '../../services/save.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  userEmail:string;

  saveRecords:any[];
  constructor(private saveService:SaveService) { }

  ngOnInit() {
    this.userEmail=this.saveService.getUserEmail();
    this.saveService.getSearchRecord(this.userEmail)
    .then(result => {
      console.log('> result = ', result);
      this.saveRecords = result;
      console.log('> Record = ', this.saveRecords);
    })
    .catch(error => {
      console.log(`Record not found: ${JSON.stringify(error)}`);
    });
  }
}
