import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technology } from '../../models/technology.model';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public technology: Technology[] = [];

  constructor(
    private http: HttpService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id =
      this.activatedRouter.snapshot.paramMap.get('query')?.toString() || '';
    console.log(id);
    this.http.getSearchTechnology(id).subscribe((data: Technology[]) => {
      this.technology = data;
      console.log(this.technology);
    });
  }
}
