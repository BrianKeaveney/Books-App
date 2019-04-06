import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  buttonText:string = "Add Review";
  show:boolean = false;
  review:string;
  starRating:number;

  constructor() { }

  onSubmit(review:string):boolean{
    this.show = false;
    this.buttonText = "Edit Review";
    this.review = review;
    return false;
  }

  setRating(rating:number){
    this.starRating = rating;
    console.log(this.starRating)
  }

  ngOnInit() {
  }

}
