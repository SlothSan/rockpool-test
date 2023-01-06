import { Component } from '@angular/core';
import { Form, FormControl } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
   
    nameControl: FormControl;
    companyControl: FormControl;
    jobTitleControl: FormControl;
    yearsControl: FormControl;
    additionalInfoControl: FormControl;

    constructor() {
      this.nameControl = new FormControl("");
      this.companyControl = new FormControl("");
      this.jobTitleControl = new FormControl("");
      this.yearsControl = new FormControl();
      this.additionalInfoControl = new FormControl("");
    }
   
}
