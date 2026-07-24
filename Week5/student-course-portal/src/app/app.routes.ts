import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';
import { StudentProfile } from './pages/student-profile/student-profile';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';

export const routes: Routes = [

    {
        path:'',
        component:Home
    },

    {
        path:'courses',
        component:Courses
    },

    {
        path:'profile',
        component:StudentProfile
    },

    {
        path:'about',
        component:About
    },

    {
        path:'login',
        component:Login
    },

    {
        path:'enroll',
        component:EnrollmentForm
    }

];