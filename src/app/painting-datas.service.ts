import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaintingDetails } from './painting-details';

@Injectable({
  providedIn: 'root'
})
export class PaintingDataService {
  private dataUrl = 'http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/data';

  constructor(private http: HttpClient) {}

  getPaintingData(): Observable<PaintingDetails> {
    return this.http.get<PaintingDetails>(this.dataUrl);
  }
}
