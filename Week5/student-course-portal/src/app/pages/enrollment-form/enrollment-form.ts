import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  imports: [FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  studentName = "";

  studentEmail = "";

  courseId:number|null=null;

  preferredSemester="";

  agreeToTerms=false;

  submitted=false;

  onSubmit(form:NgForm){

      console.log(form.value);

      console.log(form.valid);

      this.submitted=true;

  }

}