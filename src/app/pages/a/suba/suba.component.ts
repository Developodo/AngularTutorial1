import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suba',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      suba works!
    </p>
  `,
  styles: [
  ]
})
export class SubaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
