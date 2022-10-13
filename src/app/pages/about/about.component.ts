import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  src = 'https://source.unsplash.com/random';
  url = 'https://api.kanye.rest/';
  mensaje='';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //primera línea
   /* console.log("INICIO");
    fetch(this.url) //->paralelo
    .then(response => response.json())
    .then(data => {
      this.mensaje = data.quote;
    })
    .catch(err => console.error(err));
    console.log("FINAL");*/
    //fin de oninit

    this.http
      .get(this.url, { observe: 'events', reportProgress: true })
      .subscribe((e) => {
        let event = e as any;
        if ((event.type as any) == HttpEventType.DownloadProgress) {
          console.log(event.loaded); //downloaded bytes
          console.log(event.total); //total bytes to download
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
          this.mensaje = event.body.quote;
        }
      });

  }

}
