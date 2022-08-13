import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from './../../models/technology.model';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  public technology: Technology = <Technology>{};

  constructor(
    private http: HttpService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id')?.toString() || '';
    this.http.getTechnology(id).subscribe((data: Technology) => {
      this.technology = data;
      console.log(this.technology);
    });
  }
}
