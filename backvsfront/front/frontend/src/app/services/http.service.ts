import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Technology } from '../models/technology.model';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  public getTechnologies() {
    return this.http.get<Technology[]>(environment.apiUrl + '/technology');
  }

  public getTechnology(id: string) {
    return this.http.get<Technology>(environment.apiUrl + '/technology/' + id);
  }

  public getSearchTechnology(name: string) {
    return this.http.get<Technology[]>(
      environment.apiUrl + '/technology/search/' + name
    );
  }
}
