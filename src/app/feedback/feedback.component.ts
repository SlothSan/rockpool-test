import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


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

    onFormSubmit(formData: any) { 
      console.log(formData);  
    } 
   
}
