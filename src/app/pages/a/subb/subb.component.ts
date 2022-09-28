import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subb',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      subb works!
    </p>
  `,
  styles: [
  ]
})
export class SubbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
