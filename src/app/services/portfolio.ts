import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private dataUrl = 'assets/portfolio-config.json';

  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<Portfolio> {
    return this.http.get<Portfolio>(this.dataUrl);
  }
}
