import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
   
    feedbackFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {
      this.feedbackFormGroup = this.formBuilder.group({
        name: ["", Validators.compose([
          Validators.required, 
          Validators.minLength(6)
        ])],
        companyControl: ["", Validators.required],
        jobTitleControl: ["", Validators.required],
        yearsControl: [0, Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(50)
        ])],
        additionalInfoControl: ["", Validators.required]
      })

    }

    onFormSubmit(formData: any) { 
      console.log(formData);  
    } 
   
}
