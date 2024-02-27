import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TripInsert } from '../../interfaces/trip-insert';

interface Destination {
  value: number;
  name: string;
}

@Component({
  selector: 'app-postput',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './postput.component.html',
  styleUrl: './postput.component.scss',
})
export class PostputComponent {
  constructor(private http: HttpClient) {} // Inject HttpClient service

  name: string = '';
  destination: number = 0;
  country: string = '';
  cover: string = '';
  detail: string = '';
  price: number = 0;
  duration: number = 0;

  destinations: Destination[] = [
    { value: 1, name: 'เอเชีย' },
    { value: 2, name: 'ยุโรป' },
    { value: 3, name: 'เอเชียตะวันออกเฉียงใต้' },
    { value: 9, name: 'ประเทศไทย' },
  ];
  addNew() {
    const body: TripInsert = {
      name: this.name,
      destinationid: this.destination,
      country: this.country,
      coverimage: this.cover,
      detail: this.detail,
      price: this.price,
      duration: this.duration,
    };

    const url = "https://202.28.34.197" + '/tripbooking/trip';
    this.http.post(url, JSON.stringify(body)).subscribe((res: any) => {
      console.log(res);
    });
  }

  update(id: number) {
    const body: TripInsert = {
      name: this.name,
      destinationid: this.destination,
      country: this.country,
      coverimage: this.cover,
      detail: this.detail,
      price: this.price,
      duration: this.duration,
    };

    const url = `https://202.28.34.197/tripbooking/trip/${id}`;
    this.http.put(url, JSON.stringify(body)).subscribe((res: any) => {
      console.log(res);
    });
  }
}
