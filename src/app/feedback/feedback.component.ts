import { Component } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
   
    feedbackFormGroup: FormGroup;

    constructor() {
      this.feedbackFormGroup = new FormGroup({
        name: new FormControl(""),
        companyControl: new FormControl(""),
        jobTitleControl: new FormControl(""),
        yearsControl: new FormControl(0),
        additionalInfoControl: new FormControl("")
      })
    }

    onFormSubmit() { 
      console.log(this.feedbackFormGroup.value);  
    } 
   
}
