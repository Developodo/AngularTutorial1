import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <p>
      Este es el componente a
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
