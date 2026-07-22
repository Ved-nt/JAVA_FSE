import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';
import { StudentProfile } from './pages/student-profile/student-profile';
import { Login } from './pages/login/login';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'courses', component: Courses },
  { path: 'profile', component: StudentProfile },
  { path: 'login', component: Login },
  { path: 'about', component: About }
];