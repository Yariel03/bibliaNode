import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/technology.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class TechnologiesComponent implements OnInit {
  public technologies: Technology[] = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getTechnologies().subscribe((data: Technology[]) => {
      this.technologies = data;
      console.log(this.technologies);
    });
  }
}
