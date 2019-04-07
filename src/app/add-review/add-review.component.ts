import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  buttonText:string;
  show:boolean = false;
  userReview:string;
  update: any[];
  @Input() review:string;
  @Input() starRating:number;
  @Input() isReview:boolean;
  @Output() passBookRating: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onSubmit(review:string){
    this.show = false;
    this.buttonText = "Edit Review";
    this.isReview = false;
    this.review = review;
    this.userReview = review;
    this.update = [this.review, this.starRating, this.isReview]
    this.passBookRating.emit(this.update);
  }

  setButtonText(){
    if(this.isReview){
      this.buttonText = "Add Review"
    }else{
      this.buttonText = "Edit Review";
    }
  }

  setUserReview(){
    if(this.isReview == false){
      this.userReview = this.review;
      console.log(this.userReview);
    }else{
      this.userReview = "";
    }
  }

  setRating(rating:number){
    this.starRating = rating;
  }

  ngOnInit() {
    this.setButtonText();
    this.setUserReview();
  }

}
