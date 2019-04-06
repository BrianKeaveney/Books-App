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

  constructor() { }

  onSubmit(review:string, rating:number):boolean{
    this.show = false;
    this.buttonText = "Edit Review";
    this.review = review;
    console.log(rating);
    return false;
  }

  ngOnInit() {
  }

}
