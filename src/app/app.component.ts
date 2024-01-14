import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-canvas-app';

  celebrate() {
    const duration = 5000;

    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 1 },
      colors: ['#FF4500', '#008080', '#FFD700']
    });

    setTimeout(() => confetti.reset(), duration);
  }
}
