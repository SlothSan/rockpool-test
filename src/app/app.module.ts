import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
//Import the form module for later use. 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import router module for later use/
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ThankyouComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'feedback', component: FeedbackComponent},
      {path: 'thankyou', component: ThankyouComponent},
      {path: '', redirectTo: '/feedback', pathMatch: 'full'},
      {path: '**', component: PagenotfoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
