import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './common/header/header';
import { Navbar } from './common/navbar/navbar';
import { Footer } from './common/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Navbar,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}