import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaintingDetails } from './painting-details';

@Component({
  selector: 'app-painting-data',
  templateUrl: './painting-data.component.html',
  styleUrls: ['./painting-data.component.css']
})
export class PaintingDataComponent implements OnInit {
  paintingData: PaintingDetails;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<PaintingDetails>('http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/data')
      .subscribe(data => {
        this.paintingData = data;
      });
  }
}
