import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
   
    feedbackFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router) {
      this.feedbackFormGroup = this.formBuilder.group({
        name: ["", Validators.compose([
          Validators.required, 
          Validators.minLength(6),
          Validators.pattern('^[a-zA-Z ]*$')
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
      this.router.navigate(["/thankyou"])  
    } 
   
}
