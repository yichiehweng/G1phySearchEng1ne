import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import {SaveComponent } from './components/save/save.component';

import {SearchService} from './services/search.service';
import {SaveService} from './services/save.service';

const routes: Routes =[
  { path: '', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'save', component: SaveComponent },
  { path: "**", redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [SearchService,SaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
