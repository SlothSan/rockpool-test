import { Component } from '@angular/core';
import { User } from '../user'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
   submitted = false;

   onSubmit() {this.submitted = true};
}
