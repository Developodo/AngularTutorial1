import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p (click)='inicio()'>
      error404 works!
    </p>
  `,
  styles: [
  ]
})
export class Error404Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  inicio(){
    this.router.navigate(['/'])
  }

}
