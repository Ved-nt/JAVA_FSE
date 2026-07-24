import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  studentName = "Vedant Sharma";

  course = "Angular Development";

  imageUrl = "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif";

  message = "";

  studentInput = "";



  isLoggedIn = false;

  status = "Offline";

  courses = [
    "Angular",
    "Spring Boot",
    "React",
    "Java",
    "SQL"
  ];

  courseList = [
    {
      id: 1,
      name: "Angular",
      instructor: "John",
      fee: 5000
    },
    {
      id: 2,
      name: "Spring Boot",
      instructor: "David",
      fee: 7000
    },
    {
      id: 3,
      name: "React",
      instructor: "Chris",
      fee: 6000
    }
  ];

  notifications: string[] = [];



  buttonColor = "#1976d2";

  headingColor = "#1976d2";

  // Dynamic course count
  get totalCourses() {
    return this.courseList.length;
  }

  showMessage() {

    this.message = "Welcome to Angular! Happy Learning.";

    this.buttonColor = "green";

  }

  toggleLogin() {

    this.isLoggedIn = !this.isLoggedIn;

    if (this.isLoggedIn) {

      this.status = "Online";

    } else {

      this.status = "Offline";

    }

  }

}