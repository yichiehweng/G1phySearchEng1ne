import { Component, OnInit,ViewChild } from '@angular/core';
import{ SearchService} from '../../services/search.service';
import {SaveService} from '../../services/save.service';

import { NgForm, FormControl } from '@angular/forms';
import {SearchForm} from '../../model/searchModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchForm')
  searchForm: NgForm;

  giphys: string[] = [];
  

  constructor(private searchService : SearchService, private saveService:SaveService) { }
  process(){
    let theForm:SearchForm={
      userEmail:this.searchForm.value.email,
      searchTerm:this.searchForm.value.query
    }
    this.searchService.PerformSearch(this.searchForm.value.query)
    this.giphys =this.searchService.getSearchResults();
    console.log(this.giphys);
    this.saveService.addNewRecord(theForm);
    this.saveService.addUserEmail(this.searchForm.value.email);
  }

  ngOnInit() {
  }

}
