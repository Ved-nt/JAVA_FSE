import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // Data Binding Variables
  studentName = "Vedant Sharma";

  course = "Angular Development";

  imageUrl = "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif";

  message = "";

  studentInput = "";

  // Structural Directive Variables
  isLoggedIn = false;

  courses = [
    "Angular",
    "Spring Boot",
    "React",
    "Java",
    "SQL"
  ];

  courseList = [
    { id: 1, name: "Angular", instructor: "John", fee: 5000 },
    { id: 2, name: "Spring Boot", instructor: "David", fee: 7000 },
    { id: 3, name: "React", instructor: "Chris", fee: 6000 }
  ];

  notifications: string[] = [];

  // Dynamic course count
  get totalCourses() {
    return this.courseList.length;
  }

  showMessage() {
    this.message = "Welcome to Angular! Happy Learning.";
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

}