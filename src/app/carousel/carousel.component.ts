import { SearchHistoryService } from './../search-history.service';
import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { PastBook } from '../PastBook';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  items:PastBook[];

  constructor(config: NgbCarouselConfig, private _historyService: SearchHistoryService) {
  }

  makeSearch(bookSearch:string){
    console.log(bookSearch);
  }

  ngOnInit() {
    this._historyService.getSearchHistory().subscribe(userSearchHistory =>
      {this.items = userSearchHistory; console.log(this.items)});
  }

}
