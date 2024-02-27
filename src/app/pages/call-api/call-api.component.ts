import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TripGetRes } from '../../interfaces/trip-get-res';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TripService } from '../../services/api/trip.service';

@Component({
  selector: 'app-call-api',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './call-api.component.html',
  styleUrl: './call-api.component.scss',
})
export class CallApiComponent implements OnInit {
  trips: TripGetRes[] = [];

  constructor(private http: HttpClient, private tripService: TripService) {}

  async ngOnInit(): Promise<void> {
    this.trips = await this.tripService.getTrips();
  }

  // ngOnInit(): void {
  //   this.tripService.getTrips().then((res) => this.trips = res);
  // }

  // ngOnInit(): void {
  // load()
  // }

  // async load(){
  //  return this.trips = await this.tripService.getTrips();
  // }

  async callApi() {
    // const url = API_ENDPOINT + '/tripbooking/trip';
    // let data = await lastValueFrom(this.http.get(url));
    // this.trips = data as TripGetRes[];
    // console.log(this.trips);
    // console.log(this.trips[0].name);
    // console.log('Call Completed');

    this.trips = await this.tripService.getTrips(); // BEGIN: Fix method name
  }

  async findOne(input: HTMLInputElement) {
    // console.log(input.value);
    // const url = `https://202.28.34.197/tripbooking/trip/${input.value}`;
    // let data = await lastValueFrom(this.http.get(url));
    // this.trips = data as TripGetRes[];
    // console.log(this.trips);
    // console.log(this.trips[0].name);
    // console.log('Call Completed');

    // this.trips = await this.tripService.getTripById(Number(input.value));
  }

  async findName(input: HTMLInputElement) {
    // console.log(input.value);
    // const url = API_ENDPOINT + '/tripbooking/trip';
    // let data = await lastValueFrom(
    //   this.http.get(url, {
    //     params: {
    //       name: input.value,
    //     },
    //   })
    // );
    // this.trips = data as TripGetRes[];
    // console.log(this.trips);
    // console.log(this.trips[0].name);
    // console.log('Call Completed');

    // this.trips = await this.tripService.getTripsByName(input.value);
  }
}
