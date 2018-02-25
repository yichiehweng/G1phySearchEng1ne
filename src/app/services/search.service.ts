import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class SearchService {

  searchResult: string[];

  constructor(private http: Http) {
    this.searchResult = [];
   }

   PerformSearch(searchTerm: string): Promise<any>{ 
    this.searchResult = []; 
    return new Promise((resolve, reject) => {       
        let apiUrl = "https://api.giphy.com/v1/gifs/search?api_key=U80al2gS5sMjggLvV7wZQWFCrLt60wEQ&q=" + searchTerm + "&limit=25&offset=0&rating=G&lang=en";
        console.log("url: "+apiUrl);
        this.http.get(apiUrl).toPromise()
        .then(
            res => { 
                var jsonResult = res.json()["data"]; 
                console.log(jsonResult);
                jsonResult.forEach(result => {
                    var image = result["images"]["fixed_height_small"]["url"];                   
                    this.searchResult.push(image);
                });
                resolve();
              }
        );
      });
  }

  getSearchResults(): string[]{
    return this.searchResult;
  }
}
