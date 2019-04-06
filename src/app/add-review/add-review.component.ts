import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  buttonText:string = "Add Review";
  show:boolean = false;

  constructor() { }

  onSubmit(){
    this.show = false;
    this.buttonText = "Edit Review";
  }

  ngOnInit() {
  }

}
