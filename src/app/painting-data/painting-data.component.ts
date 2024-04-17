import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-data.component.html',
  styleUrls: ['./painting-data.component.css']
})
export class PaintingDataComponent implements OnInit {
  paintingData: any;
  currentDate: string;

  constructor(private http: HttpClient) {
    this.currentDate = new Date().toDateString();
  }

  ngOnInit(): void {
    this.http.get<any>('http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/data/p1200.json')
      .subscribe(data => {
        this.paintingData = data;
      });
  }

  getBooleanValue(value: boolean): string {
    return value ? 'Yes' : 'No';
  }
}
