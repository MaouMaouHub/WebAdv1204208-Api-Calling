import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Constants } from '../../config/constants';
import { lastValueFrom, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TripGetRes } from '../../interfaces/trip-get-res';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  constructor(private constants: Constants, private http: HttpClient) {}

  // getTrips
  public async getTrips(options?: any) {
    const url = this.constants.API_ENDPOINT + '/trip';

    this.http.get(url).subscribe((res)=>{
      console.log(url);
      console.log(res);
    })
    return [] as TripGetRes[];
  }

  // // getTripById
  // public async getTripById(id: number) {
  //   const url = this.constants.API_ENDPOINT + '/trip/' + id;
  //   const response = await lastValueFrom(this.http.get(url));
  //   return response as TripGetRes[];
  // }

  // // getTripsByName
  // public async getTripsByName(name: string) {
  //   const url = this.constants.API_ENDPOINT + '/trip?name=' + name;
  //   const response = await lastValueFrom(this.http.get(url));
  //   return response as TripGetRes[];
  // }
}
