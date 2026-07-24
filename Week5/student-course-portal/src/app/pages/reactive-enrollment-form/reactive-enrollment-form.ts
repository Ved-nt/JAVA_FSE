import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl,
  AsyncValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm {

  enrollForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
            Validators.email
          ],
          asyncValidators: [
            this.simulateEmailCheck()
          ]
        }
      ),

      courseId: [
        '',
        [
          Validators.required,
          this.noCourseCode
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array<FormControl<string>>([])

    });

  }

  // ----------------------------
  // Custom Validator
  // ----------------------------

  noCourseCode(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.toString().toUpperCase().startsWith('XX')) {

      return {
        noCourseCode: true
      };

    }

    return null;

  }

  // ----------------------------
  // Async Validator
  // ----------------------------

  simulateEmailCheck(): AsyncValidatorFn {

    return (control: AbstractControl): Promise<ValidationErrors | null> => {

      return new Promise(resolve => {

        setTimeout(() => {

          const email = control.value;

          if (email && email.includes('test@')) {

            resolve({
              emailTaken: true
            });

          } else {

            resolve(null);

          }

        }, 800);

      });

    };

  }

  // ----------------------------
  // FormArray Getter
  // ----------------------------

  get additionalCourses(): FormArray<FormControl<string>> {

    return this.enrollForm.get(
      'additionalCourses'
    ) as FormArray<FormControl<string>>;

  }

  // Typed controls for template

  get additionalCourseControls(): FormControl<string>[] {

    return this.additionalCourses.controls;

  }

  // ----------------------------
  // Add Course
  // ----------------------------

  addCourse() {

    this.additionalCourses.push(

      new FormControl(
        '',
        {
          nonNullable: true,
          validators: Validators.required
        }
      )

    );

  }

  // ----------------------------
  // Remove Course
  // ----------------------------

  removeCourse(index: number) {

    this.additionalCourses.removeAt(index);

  }

  // ----------------------------
  // Submit
  // ----------------------------

  onSubmit() {

    console.log("Form Value");

    console.log(this.enrollForm.value);

    console.log("Raw Value");

    console.log(this.enrollForm.getRawValue());

  }

}