import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  studentName = "Vedant Sharma";

  course = "Angular Development";

  totalCourses = 8;

  imageUrl = "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif";

  message = "";

  studentInput = "";

  showMessage() {
    this.message = "Welcome to Angular! Happy Learning.";
  }

}